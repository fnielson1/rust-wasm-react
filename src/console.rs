use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn log(msg: String) {
    web_sys::console::log_1(&msg.into());
}

#[wasm_bindgen]
pub fn warn(msg: String) {
    web_sys::console::warn_1(&msg.into());
}

#[wasm_bindgen]
pub fn error(msg: String) {
    web_sys::console::error_1(&msg.into());
}
