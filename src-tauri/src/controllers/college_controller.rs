use tauri_plugin_sql::DbInstances;

use crate::models::college_model::{self, College, CreateCollegeInput, UpdateCollegeInput};

pub use crate::models::college_model::{CreateCollegeInput as CreateCollegeRequest, UpdateCollegeInput as UpdateCollegeRequest};

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

fn normalize_create_input(input: CreateCollegeInput) -> Result<CreateCollegeInput, String> {
    Ok(CreateCollegeInput {
        code: normalize_code(&input.code, "code")?,
        name: normalize_name(&input.name, "name")?,
    })
}

fn normalize_update_input(input: UpdateCollegeInput) -> Result<UpdateCollegeInput, String> {
    Ok(UpdateCollegeInput {
        new_code: normalize_code(&input.new_code, "new_code")?,
        name: normalize_name(&input.name, "name")?,
    })
}

pub async fn create_college(
    db_instances: &DbInstances,
    input: CreateCollegeInput,
) -> Result<College, String> {
    let normalized = normalize_create_input(input)?;
    college_model::create(db_instances, &normalized).await
}

pub async fn list_colleges(db_instances: &DbInstances) -> Result<Vec<College>, String> {
    college_model::list(db_instances).await
}

pub async fn get_college(db_instances: &DbInstances, code: String) -> Result<Option<College>, String> {
    let normalized_code = normalize_code(&code, "code")?;
    college_model::get(db_instances, &normalized_code).await
}

pub async fn update_college(
    db_instances: &DbInstances,
    current_code: String,
    input: UpdateCollegeInput,
) -> Result<College, String> {
    let normalized_current_code = normalize_code(&current_code, "current_code")?;
    let normalized_input = normalize_update_input(input)?;

    college_model::update(db_instances, &normalized_current_code, &normalized_input).await
}

pub async fn delete_college(db_instances: &DbInstances, code: String) -> Result<bool, String> {
    let normalized_code = normalize_code(&code, "code")?;
    college_model::delete(db_instances, &normalized_code).await
}
