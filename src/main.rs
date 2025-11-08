use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() {
    web_sys::console::log_1(&"Hello, world!".into());
}

#[wasm_bindgen]
pub fn anger() {
    web_sys::console::log_1(&"Hello, scum!".into());
}

#[wasm_bindgen]
pub fn you() {
    web_sys::console::log_1(&"Hello, you!".into());
}

fn main() {}
