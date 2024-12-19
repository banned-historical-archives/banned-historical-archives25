export default {
  "entity": {
    "id": "7089cf8f-2691-4d9d-8b5f-5c3abf409c85",
    "name": "上海红卫战报 1969.1.31",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7089cf8f-2691-4d9d-8b5f-5c3abf409c85/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7089cf8f-2691-4d9d-8b5f-5c3abf409c85/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.1.31",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 31
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
  "path": "7089cf8f-2691-4d9d-8b5f-5c3abf409c85",
  "resource_type": "book",
  "version": 2
}