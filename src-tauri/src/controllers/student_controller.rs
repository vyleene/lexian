use tauri_plugin_sql::DbInstances;

use crate::models::student_model::{self, CreateStudentInput, Student, UpdateStudentInput};

pub use crate::models::student_model::{CreateStudentInput as CreateStudentRequest, UpdateStudentInput as UpdateStudentRequest};

fn validate_id(id: i64, field_name: &str) -> Result<(), String> {
    if !(0..=99_999_999).contains(&id) {
        return Err(format!("{} must be between 0 and 99999999.", field_name));
    }

    Ok(())
}

fn validate_name(value: &str, field_name: &str, max_len: usize) -> Result<(), String> {
    let trimmed = value.trim();
    if trimmed.is_empty() {
        return Err(format!("{} cannot be empty.", field_name));
    }

    if trimmed.chars().count() > max_len {
        return Err(format!("{} must be at most {} characters.", field_name, max_len));
    }

    Ok(())
}

fn normalize_gender(value: &str) -> Result<String, String> {
    let normalized = value.trim().to_ascii_uppercase();
    if normalized != "M" && normalized != "F" {
        return Err("gender must be either 'M' or 'F'.".to_string());
    }

    Ok(normalized)
}

fn validate_year(year: i64) -> Result<(), String> {
    if !(1..=4).contains(&year) {
        return Err("year must be one of 1, 2, 3, or 4.".to_string());
    }

    Ok(())
}

fn normalize_create_input(input: CreateStudentInput) -> Result<CreateStudentInput, String> {
    validate_id(input.id, "id")?;
    validate_name(&input.firstname, "firstname", 32)?;
    validate_name(&input.lastname, "lastname", 32)?;
    validate_year(input.year)?;

    Ok(CreateStudentInput {
        id: input.id,
        firstname: input.firstname.trim().to_string(),
        lastname: input.lastname.trim().to_string(),
        gender: normalize_gender(&input.gender)?,
        year: input.year,
    })
}

fn normalize_update_input(input: UpdateStudentInput) -> Result<UpdateStudentInput, String> {
    validate_id(input.new_id, "new_id")?;
    validate_name(&input.firstname, "firstname", 32)?;
    validate_name(&input.lastname, "lastname", 32)?;
    validate_year(input.year)?;

    Ok(UpdateStudentInput {
        new_id: input.new_id,
        firstname: input.firstname.trim().to_string(),
        lastname: input.lastname.trim().to_string(),
        gender: normalize_gender(&input.gender)?,
        year: input.year,
    })
}

pub async fn create_student(
    db_instances: &DbInstances,
    input: CreateStudentInput,
) -> Result<Student, String> {
    let normalized = normalize_create_input(input)?;
    student_model::create(db_instances, &normalized).await
}

pub async fn list_students(db_instances: &DbInstances) -> Result<Vec<Student>, String> {
    student_model::list(db_instances).await
}

pub async fn get_student(db_instances: &DbInstances, id: i64) -> Result<Option<Student>, String> {
    validate_id(id, "id")?;
    student_model::get(db_instances, id).await
}

pub async fn update_student(
    db_instances: &DbInstances,
    current_id: i64,
    input: UpdateStudentInput,
) -> Result<Student, String> {
    validate_id(current_id, "current_id")?;
    let normalized = normalize_update_input(input)?;
    student_model::update(db_instances, current_id, &normalized).await
}

pub async fn delete_student(db_instances: &DbInstances, id: i64) -> Result<bool, String> {
    validate_id(id, "id")?;
    student_model::delete(db_instances, id).await
}
