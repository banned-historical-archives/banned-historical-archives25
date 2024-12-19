export default {
  "entity": {
    "id": "34a5d889-3395-4daf-8f5a-6800d5d31dd9",
    "name": "大批判 1967.9.19",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/34a5d889-3395-4daf-8f5a-6800d5d31dd9/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/34a5d889-3395-4daf-8f5a-6800d5d31dd9/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大批判 1967.9.19",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 19
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
  "path": "34a5d889-3395-4daf-8f5a-6800d5d31dd9",
  "resource_type": "book",
  "version": 2
}