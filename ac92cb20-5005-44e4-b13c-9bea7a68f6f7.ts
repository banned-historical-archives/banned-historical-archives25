export default {
  "entity": {
    "id": "ac92cb20-5005-44e4-b13c-9bea7a68f6f7",
    "name": "进军报 1967.3.11",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ac92cb20-5005-44e4-b13c-9bea7a68f6f7/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ac92cb20-5005-44e4-b13c-9bea7a68f6f7/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】进军报 1967.3.11",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 3,
            "day": 11
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
  "path": "ac92cb20-5005-44e4-b13c-9bea7a68f6f7",
  "resource_type": "book",
  "version": 2
}