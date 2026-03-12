use serde::{Deserialize, Serialize};
use sqlx::{sqlite::SqliteRow, Row};
use tauri_plugin_sql::DbInstances;

use crate::models::database_model::sqlite_pool;

#[derive(Debug, Clone, Serialize)]
pub struct Student {
    pub id: i64,
    pub firstname: String,
    pub lastname: String,
    pub gender: String,
    pub year: i64,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CreateStudentInput {
    pub id: i64,
    pub firstname: String,
    pub lastname: String,
    pub gender: String,
    pub year: i64,
}

#[derive(Debug, Clone, Deserialize)]
pub struct UpdateStudentInput {
    pub new_id: i64,
    pub firstname: String,
    pub lastname: String,
    pub gender: String,
    pub year: i64,
}

fn from_row(row: &SqliteRow) -> Result<Student, String> {
    Ok(Student {
        id: row.try_get("id").map_err(|error| error.to_string())?,
        firstname: row
            .try_get("firstname")
            .map_err(|error| error.to_string())?,
        lastname: row
            .try_get("lastname")
            .map_err(|error| error.to_string())?,
        gender: row.try_get("gender").map_err(|error| error.to_string())?,
        year: row.try_get("year").map_err(|error| error.to_string())?,
    })
}

pub async fn create(db_instances: &DbInstances, input: &CreateStudentInput) -> Result<Student, String> {
    let pool = sqlite_pool(db_instances).await?;

    sqlx::query("INSERT INTO students (id, firstname, lastname, gender, year) VALUES (?, ?, ?, ?, ?)")
        .bind(input.id)
        .bind(&input.firstname)
        .bind(&input.lastname)
        .bind(&input.gender)
        .bind(input.year)
        .execute(&pool)
        .await
        .map_err(|error| error.to_string())?;

    get(db_instances, input.id)
        .await?
        .ok_or_else(|| format!("Student with id {} was created but could not be loaded.", input.id))
}

pub async fn list(db_instances: &DbInstances) -> Result<Vec<Student>, String> {
    let pool = sqlite_pool(db_instances).await?;

    let rows = sqlx::query("SELECT id, firstname, lastname, gender, year FROM students ORDER BY id")
        .fetch_all(&pool)
        .await
        .map_err(|error| error.to_string())?;

    rows.into_iter().map(|row| from_row(&row)).collect()
}

pub async fn get(db_instances: &DbInstances, id: i64) -> Result<Option<Student>, String> {
    let pool = sqlite_pool(db_instances).await?;

    let row = sqlx::query("SELECT id, firstname, lastname, gender, year FROM students WHERE id = ?")
        .bind(id)
        .fetch_optional(&pool)
        .await
        .map_err(|error| error.to_string())?;

    row.map(|value| from_row(&value)).transpose()
}

pub async fn update(
    db_instances: &DbInstances,
    current_id: i64,
    input: &UpdateStudentInput,
) -> Result<Student, String> {
    let pool = sqlite_pool(db_instances).await?;

    let result = sqlx::query(
        "UPDATE students SET id = ?, firstname = ?, lastname = ?, gender = ?, year = ? WHERE id = ?",
    )
    .bind(input.new_id)
    .bind(&input.firstname)
    .bind(&input.lastname)
    .bind(&input.gender)
    .bind(input.year)
    .bind(current_id)
    .execute(&pool)
    .await
    .map_err(|error| error.to_string())?;

    if result.rows_affected() == 0 {
        return Err(format!("Student with id {} was not found.", current_id));
    }

    get(db_instances, input.new_id)
        .await?
        .ok_or_else(|| format!("Student with id {} could not be loaded after update.", input.new_id))
}

pub async fn delete(db_instances: &DbInstances, id: i64) -> Result<bool, String> {
    let pool = sqlite_pool(db_instances).await?;

    let result = sqlx::query("DELETE FROM students WHERE id = ?")
        .bind(id)
        .execute(&pool)
        .await
        .map_err(|error| error.to_string())?;

    Ok(result.rows_affected() > 0)
}
