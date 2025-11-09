use crate::console;
use js_sys::Date;
use libm::log;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run_stress_test(iterations: u32) {
    let start = Date::now();
    let mut me = 0.0;

    for i in 1..=iterations {
        let val = log(i as f64) / 2.0;
        me = log(val);
    }

    console::log(format!("Stress test completed: {}", me));
    let end = Date::now();
    let elapsed = end - start;
    console::log(format!("Stress test took {:.2} ms", elapsed));
}
