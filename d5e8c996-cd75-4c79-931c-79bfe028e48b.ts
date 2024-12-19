export default {
  "entity": {
    "id": "d5e8c996-cd75-4c79-931c-79bfe028e48b",
    "name": "红色风暴 1968.11.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d5e8c996-cd75-4c79-931c-79bfe028e48b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d5e8c996-cd75-4c79-931c-79bfe028e48b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d5e8c996-cd75-4c79-931c-79bfe028e48b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d5e8c996-cd75-4c79-931c-79bfe028e48b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.11.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 11,
            "day": 7
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
  "path": "d5e8c996-cd75-4c79-931c-79bfe028e48b",
  "resource_type": "book",
  "version": 2
}