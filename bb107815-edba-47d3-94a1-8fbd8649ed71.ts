export default {
  "entity": {
    "id": "bb107815-edba-47d3-94a1-8fbd8649ed71",
    "name": "北京消息 1967.9.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bb107815-edba-47d3-94a1-8fbd8649ed71/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bb107815-edba-47d3-94a1-8fbd8649ed71/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bb107815-edba-47d3-94a1-8fbd8649ed71/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】北京消息 1967.9.14",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
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
  "path": "bb107815-edba-47d3-94a1-8fbd8649ed71",
  "resource_type": "book",
  "version": 2
}