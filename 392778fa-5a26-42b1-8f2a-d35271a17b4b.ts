export default {
  "entity": {
    "id": "392778fa-5a26-42b1-8f2a-d35271a17b4b",
    "name": "大会专刊 1968.1.12",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/392778fa-5a26-42b1-8f2a-d35271a17b4b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/392778fa-5a26-42b1-8f2a-d35271a17b4b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/392778fa-5a26-42b1-8f2a-d35271a17b4b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/392778fa-5a26-42b1-8f2a-d35271a17b4b/4.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/392778fa-5a26-42b1-8f2a-d35271a17b4b/5.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1968.1.12",
        "authors": [],
        "page_start": 1,
        "page_end": 5,
        "dates": [
          {
            "year": 1968,
            "month": 1,
            "day": 12
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
  "path": "392778fa-5a26-42b1-8f2a-d35271a17b4b",
  "resource_type": "book",
  "version": 2
}