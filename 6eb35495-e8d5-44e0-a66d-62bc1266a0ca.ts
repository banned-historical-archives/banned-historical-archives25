export default {
  "entity": {
    "id": "6eb35495-e8d5-44e0-a66d-62bc1266a0ca",
    "name": "红色风暴 1968.8.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6eb35495-e8d5-44e0-a66d-62bc1266a0ca/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6eb35495-e8d5-44e0-a66d-62bc1266a0ca/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6eb35495-e8d5-44e0-a66d-62bc1266a0ca/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6eb35495-e8d5-44e0-a66d-62bc1266a0ca/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.8.25",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
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
  "path": "6eb35495-e8d5-44e0-a66d-62bc1266a0ca",
  "resource_type": "book",
  "version": 2
}