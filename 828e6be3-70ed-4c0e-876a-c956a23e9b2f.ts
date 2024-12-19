export default {
  "entity": {
    "id": "828e6be3-70ed-4c0e-876a-c956a23e9b2f",
    "name": "文艺战报 1967.6.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/828e6be3-70ed-4c0e-876a-c956a23e9b2f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/828e6be3-70ed-4c0e-876a-c956a23e9b2f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/828e6be3-70ed-4c0e-876a-c956a23e9b2f/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/828e6be3-70ed-4c0e-876a-c956a23e9b2f/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文艺战报 1967.6.20",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 6,
            "day": 20
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
  "path": "828e6be3-70ed-4c0e-876a-c956a23e9b2f",
  "resource_type": "book",
  "version": 2
}