use js_sys;
use web_sys::{console};
use wasm_bindgen::prelude::*;

use nalgebra::RotationWithTranslation;
use nalgebra::{Matrix4, Vector3};

mod utils;

#[wasm_bindgen]
extern "C" {
  fn alert(s: &str);
}

#[wasm_bindgen]
pub async fn greet(filename: &str) -> Result<(), JsValue> {
  utils::set_panic_hook();

  // alert(filename);
  console::log_1(&JsValue::from_str(filename));

  Ok(())
}

#[wasm_bindgen]
pub struct Cube {
  vertex_array: Vec<f32>,
  position: Vector3<f32>,
  rotation: Vector3<f32>,
}

#[wasm_bindgen]
impl Cube {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Cube {
    Cube {
      vertex_array: Vec::from([
        // float4 position, float4 color, float2 uv,
         1.0, -1.0,  1.0,  1.0,   1.0, 0.0, 1.0, 1.0,   0.0, 1.0,
        -1.0, -1.0,  1.0,  1.0,   0.0, 0.0, 1.0, 1.0,   1.0, 1.0,
        -1.0, -1.0, -1.0,  1.0,   0.0, 0.0, 0.0, 1.0,   1.0, 0.0,
         1.0, -1.0, -1.0,  1.0,   1.0, 0.0, 0.0, 1.0,   0.0, 0.0,
         1.0, -1.0,  1.0,  1.0,   1.0, 0.0, 1.0, 1.0,   0.0, 1.0,
        -1.0, -1.0, -1.0,  1.0,   0.0, 0.0, 0.0, 1.0,   1.0, 0.0,

         1.0,  1.0,  1.0,  1.0,   1.0, 1.0, 1.0, 1.0,   0.0, 1.0,
         1.0, -1.0,  1.0,  1.0,   1.0, 0.0, 1.0, 1.0,   1.0, 1.0,
         1.0, -1.0, -1.0,  1.0,   1.0, 0.0, 0.0, 1.0,   1.0, 0.0,
         1.0,  1.0, -1.0,  1.0,   1.0, 1.0, 0.0, 1.0,   0.0, 0.0,
         1.0,  1.0,  1.0,  1.0,   1.0, 1.0, 1.0, 1.0,   0.0, 1.0,
         1.0, -1.0, -1.0,  1.0,   1.0, 0.0, 0.0, 1.0,   1.0, 0.0,

        -1.0,  1.0,  1.0,  1.0,   0.0, 1.0, 1.0, 1.0,   0.0, 1.0,
         1.0,  1.0,  1.0,  1.0,   1.0, 1.0, 1.0, 1.0,   1.0, 1.0,
         1.0,  1.0, -1.0,  1.0,   1.0, 1.0, 0.0, 1.0,   1.0, 0.0,
        -1.0,  1.0, -1.0,  1.0,   0.0, 1.0, 0.0, 1.0,   0.0, 0.0,
        -1.0,  1.0,  1.0,  1.0,   0.0, 1.0, 1.0, 1.0,   0.0, 1.0,
         1.0,  1.0, -1.0,  1.0,   1.0, 1.0, 0.0, 1.0,   1.0, 0.0,

        -1.0, -1.0,  1.0,  1.0,   0.0, 0.0, 1.0, 1.0,   0.0, 1.0,
        -1.0,  1.0,  1.0,  1.0,   0.0, 1.0, 1.0, 1.0,   1.0, 1.0,
        -1.0,  1.0, -1.0,  1.0,   0.0, 1.0, 0.0, 1.0,   1.0, 0.0,
        -1.0, -1.0, -1.0,  1.0,   0.0, 0.0, 0.0, 1.0,   0.0, 0.0,
        -1.0, -1.0,  1.0,  1.0,   0.0, 0.0, 1.0, 1.0,   0.0, 1.0,
        -1.0,  1.0, -1.0,  1.0,   0.0, 1.0, 0.0, 1.0,   1.0, 0.0,

         1.0,  1.0,  1.0,  1.0,   1.0, 1.0, 1.0, 1.0,   0.0, 1.0,
        -1.0,  1.0,  1.0,  1.0,   0.0, 1.0, 1.0, 1.0,   1.0, 1.0,
        -1.0, -1.0,  1.0,  1.0,   0.0, 0.0, 1.0, 1.0,   1.0, 0.0,
        -1.0, -1.0,  1.0,  1.0,   0.0, 0.0, 1.0, 1.0,   1.0, 0.0,
         1.0, -1.0,  1.0,  1.0,   1.0, 0.0, 1.0, 1.0,   0.0, 0.0,
         1.0,  1.0,  1.0,  1.0,   1.0, 1.0, 1.0, 1.0,   0.0, 1.0,

         1.0, -1.0, -1.0,  1.0,   1.0, 0.0, 0.0, 1.0,   0.0, 1.0,
        -1.0, -1.0, -1.0,  1.0,   0.0, 0.0, 0.0, 1.0,   1.0, 1.0,
        -1.0,  1.0, -1.0,  1.0,   0.0, 1.0, 0.0, 1.0,   1.0, 0.0,
         1.0,  1.0, -1.0,  1.0,   1.0, 1.0, 0.0, 1.0,   0.0, 0.0,
         1.0, -1.0, -1.0,  1.0,   1.0, 0.0, 0.0, 1.0,   0.0, 1.0,
        -1.0,  1.0, -1.0,  1.0,   0.0, 1.0, 0.0, 1.0,   1.0, 0.0,
      ]),
      position: Vector3::from([0.0, 0.0, -5.0]),
      rotation: Vector3::from([0.0, 0.0, 0.0]),
    }
  }

  #[wasm_bindgen(getter)]
  pub fn vertex_array(&self) -> js_sys::Float32Array {
      return js_sys::Float32Array::from(&self.vertex_array[..]);
  }

  pub fn update(&mut self, time: f32) {
    self.rotation = Vector3::from([f32::sin(time), f32::cos(time), 0.0])
  }

  pub fn get_view_matrix(&self) -> Vec<f32> {
    let mut view_matrix = Matrix4::<f32>::identity();

    view_matrix.append_translation_mut(&self.position);
    view_matrix.append_rotation_wrt_center_mut(&self.rotation);
    // mat4.translate(viewMatrix, position, viewMatrix)
    // mat4.rotate(viewMatrix, rotation, 1, viewMatrix)


    return Vec::from([]);
  }
}
