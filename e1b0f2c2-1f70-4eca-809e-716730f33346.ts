export default {
  "entity": {
    "id": "e1b0f2c2-1f70-4eca-809e-716730f33346",
    "name": "红色风暴 1968.12.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e1b0f2c2-1f70-4eca-809e-716730f33346/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e1b0f2c2-1f70-4eca-809e-716730f33346/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e1b0f2c2-1f70-4eca-809e-716730f33346/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e1b0f2c2-1f70-4eca-809e-716730f33346/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.12.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 12,
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
  "path": "e1b0f2c2-1f70-4eca-809e-716730f33346",
  "resource_type": "book",
  "version": 2
}