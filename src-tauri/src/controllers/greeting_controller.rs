use crate::models::greeting_model::GreetingModel;
use crate::views::greeting_view::render_greeting;

pub fn greet(name: &str) -> String {
    let model = GreetingModel::new(name);
    render_greeting(&model)
}
