use sqlx::{Pool, Sqlite};
use tauri_plugin_sql::{DbInstances, DbPool, Migration, MigrationKind};

pub const DATABASE_URL: &str = "sqlite:lexian.db";

pub async fn sqlite_pool(db_instances: &DbInstances) -> Result<Pool<Sqlite>, String> {
    let instances = db_instances.0.read().await;
    let Some(db_pool) = instances.get(DATABASE_URL) else {
        return Err(format!(
            "Database pool for '{}' is not loaded. Ensure sql.preload includes this URL.",
            DATABASE_URL
        ));
    };

    match db_pool {
        DbPool::Sqlite(pool) => Ok(pool.clone()),
    }
}

pub fn sqlite_migrations() -> Vec<Migration> {
    vec![Migration {
        version: 1,
        description: "create_student_information_schema",
        sql: r#"
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS students (
    id INTEGER NOT NULL PRIMARY KEY CHECK (id BETWEEN 0 AND 99999999),
    firstname TEXT NOT NULL CHECK (length(firstname) <= 32),
    lastname TEXT NOT NULL CHECK (length(lastname) <= 32),
    gender TEXT NOT NULL CHECK (gender IN ('M', 'F')),
    year INTEGER NOT NULL CHECK (year IN (1, 2, 3, 4))
);

CREATE TABLE IF NOT EXISTS programs (
    code TEXT NOT NULL PRIMARY KEY CHECK (length(code) <= 10),
    name TEXT NOT NULL CHECK (length(name) <= 64)
);

CREATE TABLE IF NOT EXISTS colleges (
    code TEXT NOT NULL PRIMARY KEY CHECK (length(code) <= 10),
    name TEXT NOT NULL CHECK (length(name) <= 64)
);

CREATE TABLE IF NOT EXISTS students_programs (
    student_id INTEGER NOT NULL,
    program_code TEXT NOT NULL,
    PRIMARY KEY (student_id, program_code),
    FOREIGN KEY (student_id) REFERENCES students(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (program_code) REFERENCES programs(code)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS colleges_programs (
    college_code TEXT NOT NULL,
    program_code TEXT NOT NULL,
    PRIMARY KEY (college_code, program_code),
    FOREIGN KEY (college_code) REFERENCES colleges(code)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (program_code) REFERENCES programs(code)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
"#,
        kind: MigrationKind::Up,
    }]
}
