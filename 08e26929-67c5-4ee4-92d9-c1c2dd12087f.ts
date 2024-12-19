export default {
  "entity": {
    "id": "08e26929-67c5-4ee4-92d9-c1c2dd12087f",
    "name": "上海红卫战报 1968.4.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/08e26929-67c5-4ee4-92d9-c1c2dd12087f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/08e26929-67c5-4ee4-92d9-c1c2dd12087f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/08e26929-67c5-4ee4-92d9-c1c2dd12087f/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/08e26929-67c5-4ee4-92d9-c1c2dd12087f/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1968.4.25",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 4,
            "day": 25
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
  "path": "08e26929-67c5-4ee4-92d9-c1c2dd12087f",
  "resource_type": "book",
  "version": 2
}