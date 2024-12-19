export default {
  "entity": {
    "id": "b201ecbd-4bbf-4842-a274-e08a0f5efcc3",
    "name": "首都红卫兵 1967.1.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b201ecbd-4bbf-4842-a274-e08a0f5efcc3/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b201ecbd-4bbf-4842-a274-e08a0f5efcc3/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b201ecbd-4bbf-4842-a274-e08a0f5efcc3/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b201ecbd-4bbf-4842-a274-e08a0f5efcc3/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】首都红卫兵 1967.1.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 1,
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
  "path": "b201ecbd-4bbf-4842-a274-e08a0f5efcc3",
  "resource_type": "book",
  "version": 2
}