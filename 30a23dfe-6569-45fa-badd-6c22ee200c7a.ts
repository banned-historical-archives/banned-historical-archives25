export default {
  "entity": {
    "id": "30a23dfe-6569-45fa-badd-6c22ee200c7a",
    "name": "上海红卫战报 1969.2.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/30a23dfe-6569-45fa-badd-6c22ee200c7a/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/30a23dfe-6569-45fa-badd-6c22ee200c7a/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.2.14",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1969,
            "month": 2,
            "day": 14
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
  "path": "30a23dfe-6569-45fa-badd-6c22ee200c7a",
  "resource_type": "book",
  "version": 2
}