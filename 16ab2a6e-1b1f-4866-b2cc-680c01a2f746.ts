export default {
  "entity": {
    "id": "16ab2a6e-1b1f-4866-b2cc-680c01a2f746",
    "name": "红卫战报 1966.12.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/16ab2a6e-1b1f-4866-b2cc-680c01a2f746/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/16ab2a6e-1b1f-4866-b2cc-680c01a2f746/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/16ab2a6e-1b1f-4866-b2cc-680c01a2f746/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/16ab2a6e-1b1f-4866-b2cc-680c01a2f746/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫战报 1966.12.17",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1966,
            "month": 12,
            "day": 17
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
  "path": "16ab2a6e-1b1f-4866-b2cc-680c01a2f746",
  "resource_type": "book",
  "version": 2
}