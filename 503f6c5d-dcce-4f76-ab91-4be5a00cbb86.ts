export default {
  "entity": {
    "id": "503f6c5d-dcce-4f76-ab91-4be5a00cbb86",
    "name": "动态报 1967.9.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/503f6c5d-dcce-4f76-ab91-4be5a00cbb86/1.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/503f6c5d-dcce-4f76-ab91-4be5a00cbb86/2.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/503f6c5d-dcce-4f76-ab91-4be5a00cbb86/3.png"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】动态报 1967.9.15",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 15
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": false,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "503f6c5d-dcce-4f76-ab91-4be5a00cbb86",
  "resource_type": "book",
  "version": 2
}