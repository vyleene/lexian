use crate::models::greeting_model::GreetingModel;

pub fn render_greeting(model: &GreetingModel) -> String {
    format!("Hello, {}! You've been greeted from Rust!", model.name())
}
