export default {
  "entity": {
    "id": "0a62441e-f037-4a4a-a633-e5a89779243b",
    "name": "大会专刊 1967.9.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a62441e-f037-4a4a-a633-e5a89779243b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a62441e-f037-4a4a-a633-e5a89779243b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a62441e-f037-4a4a-a633-e5a89779243b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a62441e-f037-4a4a-a633-e5a89779243b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1967.9.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 21
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
  "path": "0a62441e-f037-4a4a-a633-e5a89779243b",
  "resource_type": "book",
  "version": 2
}