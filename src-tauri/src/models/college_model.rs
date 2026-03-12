use serde::{Deserialize, Serialize};
use sqlx::{sqlite::SqliteRow, Row};
use tauri_plugin_sql::DbInstances;

use crate::models::database_model::sqlite_pool;

#[derive(Debug, Clone, Serialize)]
pub struct College {
    pub code: String,
    pub name: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CreateCollegeInput {
    pub code: String,
    pub name: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct UpdateCollegeInput {
    pub new_code: String,
    pub name: String,
}

fn from_row(row: &SqliteRow) -> Result<College, String> {
    Ok(College {
        code: row.try_get("code").map_err(|error| error.to_string())?,
        name: row.try_get("name").map_err(|error| error.to_string())?,
    })
}

pub async fn create(db_instances: &DbInstances, input: &CreateCollegeInput) -> Result<College, String> {
    let pool = sqlite_pool(db_instances).await?;

    sqlx::query("INSERT INTO colleges (code, name) VALUES (?, ?)")
        .bind(&input.code)
        .bind(&input.name)
        .execute(&pool)
        .await
        .map_err(|error| error.to_string())?;

    get(db_instances, &input.code)
        .await?
        .ok_or_else(|| format!("College with code '{}' was created but could not be loaded.", input.code))
}

pub async fn list(db_instances: &DbInstances) -> Result<Vec<College>, String> {
    let pool = sqlite_pool(db_instances).await?;

    let rows = sqlx::query("SELECT code, name FROM colleges ORDER BY code")
        .fetch_all(&pool)
        .await
        .map_err(|error| error.to_string())?;

    rows.into_iter().map(|row| from_row(&row)).collect()
}

pub async fn get(db_instances: &DbInstances, code: &str) -> Result<Option<College>, String> {
    let pool = sqlite_pool(db_instances).await?;

    let row = sqlx::query("SELECT code, name FROM colleges WHERE code = ?")
        .bind(code)
        .fetch_optional(&pool)
        .await
        .map_err(|error| error.to_string())?;

    row.map(|value| from_row(&value)).transpose()
}

pub async fn update(
    db_instances: &DbInstances,
    current_code: &str,
    input: &UpdateCollegeInput,
) -> Result<College, String> {
    let pool = sqlite_pool(db_instances).await?;

    let result = sqlx::query("UPDATE colleges SET code = ?, name = ? WHERE code = ?")
        .bind(&input.new_code)
        .bind(&input.name)
        .bind(current_code)
        .execute(&pool)
        .await
        .map_err(|error| error.to_string())?;

    if result.rows_affected() == 0 {
        return Err(format!("College with code '{}' was not found.", current_code));
    }

    get(db_instances, &input.new_code)
        .await?
        .ok_or_else(|| format!("College with code '{}' could not be loaded after update.", input.new_code))
}

pub async fn delete(db_instances: &DbInstances, code: &str) -> Result<bool, String> {
    let pool = sqlite_pool(db_instances).await?;

    let result = sqlx::query("DELETE FROM colleges WHERE code = ?")
        .bind(code)
        .execute(&pool)
        .await
        .map_err(|error| error.to_string())?;

    Ok(result.rows_affected() > 0)
}
