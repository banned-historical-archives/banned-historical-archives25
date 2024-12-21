export default {
  "entity": {
    "id": "d13a02bb-6913-4c60-841c-6be2aac4ae13",
    "name": "纺织工人报 1968.7.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d13a02bb-6913-4c60-841c-6be2aac4ae13/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d13a02bb-6913-4c60-841c-6be2aac4ae13/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d13a02bb-6913-4c60-841c-6be2aac4ae13/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】纺织工人报 1968.7.25",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1968,
            "month": 7,
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
  "path": "d13a02bb-6913-4c60-841c-6be2aac4ae13",
  "resource_type": "book",
  "version": 2
}