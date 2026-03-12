mod controllers;
mod models;
mod views;

#[tauri::command]
fn greet(name: &str) -> String {
    controllers::greeting_controller::greet(name)
}

#[tauri::command]
async fn create_student(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    input: controllers::student_controller::CreateStudentRequest,
) -> Result<models::student_model::Student, String> {
    controllers::student_controller::create_student(db_instances.inner(), input).await
}

#[tauri::command]
async fn list_students(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
) -> Result<Vec<models::student_model::Student>, String> {
    controllers::student_controller::list_students(db_instances.inner()).await
}

#[tauri::command]
async fn get_student(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    id: i64,
) -> Result<Option<models::student_model::Student>, String> {
    controllers::student_controller::get_student(db_instances.inner(), id).await
}

#[tauri::command]
async fn update_student(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    current_id: i64,
    input: controllers::student_controller::UpdateStudentRequest,
) -> Result<models::student_model::Student, String> {
    controllers::student_controller::update_student(db_instances.inner(), current_id, input).await
}

#[tauri::command]
async fn delete_student(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    id: i64,
) -> Result<bool, String> {
    controllers::student_controller::delete_student(db_instances.inner(), id).await
}

#[tauri::command]
async fn create_program(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    input: controllers::program_controller::CreateProgramRequest,
) -> Result<models::program_model::Program, String> {
    controllers::program_controller::create_program(db_instances.inner(), input).await
}

#[tauri::command]
async fn list_programs(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
) -> Result<Vec<models::program_model::Program>, String> {
    controllers::program_controller::list_programs(db_instances.inner()).await
}

#[tauri::command]
async fn get_program(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    code: String,
) -> Result<Option<models::program_model::Program>, String> {
    controllers::program_controller::get_program(db_instances.inner(), code).await
}

#[tauri::command]
async fn update_program(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    current_code: String,
    input: controllers::program_controller::UpdateProgramRequest,
) -> Result<models::program_model::Program, String> {
    controllers::program_controller::update_program(db_instances.inner(), current_code, input).await
}

#[tauri::command]
async fn delete_program(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    code: String,
) -> Result<bool, String> {
    controllers::program_controller::delete_program(db_instances.inner(), code).await
}

#[tauri::command]
async fn create_college(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    input: controllers::college_controller::CreateCollegeRequest,
) -> Result<models::college_model::College, String> {
    controllers::college_controller::create_college(db_instances.inner(), input).await
}

#[tauri::command]
async fn list_colleges(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
) -> Result<Vec<models::college_model::College>, String> {
    controllers::college_controller::list_colleges(db_instances.inner()).await
}

#[tauri::command]
async fn get_college(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    code: String,
) -> Result<Option<models::college_model::College>, String> {
    controllers::college_controller::get_college(db_instances.inner(), code).await
}

#[tauri::command]
async fn update_college(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    current_code: String,
    input: controllers::college_controller::UpdateCollegeRequest,
) -> Result<models::college_model::College, String> {
    controllers::college_controller::update_college(db_instances.inner(), current_code, input).await
}

#[tauri::command]
async fn delete_college(
    db_instances: tauri::State<'_, tauri_plugin_sql::DbInstances>,
    code: String,
) -> Result<bool, String> {
    controllers::college_controller::delete_college(db_instances.inner(), code).await
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::new()
                .add_migrations(
                    models::database_model::DATABASE_URL,
                    models::database_model::sqlite_migrations(),
                )
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            create_student,
            list_students,
            get_student,
            update_student,
            delete_student,
            create_program,
            list_programs,
            get_program,
            update_program,
            delete_program,
            create_college,
            list_colleges,
            get_college,
            update_college,
            delete_college
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
