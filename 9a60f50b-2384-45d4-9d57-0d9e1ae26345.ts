export default {
  "entity": {
    "id": "9a60f50b-2384-45d4-9d57-0d9e1ae26345",
    "name": "进军报 1967.6.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9a60f50b-2384-45d4-9d57-0d9e1ae26345/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9a60f50b-2384-45d4-9d57-0d9e1ae26345/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】进军报 1967.6.14",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 6,
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
  "path": "9a60f50b-2384-45d4-9d57-0d9e1ae26345",
  "resource_type": "book",
  "version": 2
}