use tauri_plugin_sql::DbInstances;

use crate::models::program_model::{self, CreateProgramInput, Program, UpdateProgramInput};

pub use crate::models::program_model::{CreateProgramInput as CreateProgramRequest, UpdateProgramInput as UpdateProgramRequest};

fn normalize_code(value: &str, field_name: &str) -> Result<String, String> {
    let trimmed = value.trim();
    if trimmed.is_empty() {
        return Err(format!("{} cannot be empty.", field_name));
    }

    if trimmed.chars().count() > 10 {
        return Err(format!("{} must be at most 10 characters.", field_name));
    }

    Ok(trimmed.to_ascii_uppercase())
}

fn normalize_name(value: &str, field_name: &str) -> Result<String, String> {
    let trimmed = value.trim();
    if trimmed.is_empty() {
        return Err(format!("{} cannot be empty.", field_name));
    }

    if trimmed.chars().count() > 64 {
        return Err(format!("{} must be at most 64 characters.", field_name));
    }

    Ok(trimmed.to_string())
}

fn normalize_create_input(input: CreateProgramInput) -> Result<CreateProgramInput, String> {
    Ok(CreateProgramInput {
        code: normalize_code(&input.code, "code")?,
        name: normalize_name(&input.name, "name")?,
    })
}

fn normalize_update_input(input: UpdateProgramInput) -> Result<UpdateProgramInput, String> {
    Ok(UpdateProgramInput {
        new_code: normalize_code(&input.new_code, "new_code")?,
        name: normalize_name(&input.name, "name")?,
    })
}

pub async fn create_program(
    db_instances: &DbInstances,
    input: CreateProgramInput,
) -> Result<Program, String> {
    let normalized = normalize_create_input(input)?;
    program_model::create(db_instances, &normalized).await
}

pub async fn list_programs(db_instances: &DbInstances) -> Result<Vec<Program>, String> {
    program_model::list(db_instances).await
}

pub async fn get_program(db_instances: &DbInstances, code: String) -> Result<Option<Program>, String> {
    let normalized_code = normalize_code(&code, "code")?;
    program_model::get(db_instances, &normalized_code).await
}

pub async fn update_program(
    db_instances: &DbInstances,
    current_code: String,
    input: UpdateProgramInput,
) -> Result<Program, String> {
    let normalized_current_code = normalize_code(&current_code, "current_code")?;
    let normalized_input = normalize_update_input(input)?;

    program_model::update(db_instances, &normalized_current_code, &normalized_input).await
}

pub async fn delete_program(db_instances: &DbInstances, code: String) -> Result<bool, String> {
    let normalized_code = normalize_code(&code, "code")?;
    program_model::delete(db_instances, &normalized_code).await
}
