export default {
  "entity": {
    "id": "2f7d6a44-9499-44cf-a8ac-f1110d41cf42",
    "name": "新师大 1967.7.18",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2f7d6a44-9499-44cf-a8ac-f1110d41cf42/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2f7d6a44-9499-44cf-a8ac-f1110d41cf42/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2f7d6a44-9499-44cf-a8ac-f1110d41cf42/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】新师大 1967.7.18",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 7,
            "day": 18
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
  "path": "2f7d6a44-9499-44cf-a8ac-f1110d41cf42",
  "resource_type": "book",
  "version": 2
}