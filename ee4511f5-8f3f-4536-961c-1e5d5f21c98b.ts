export default {
  "entity": {
    "id": "ee4511f5-8f3f-4536-961c-1e5d5f21c98b",
    "name": "红色风暴 1969.1.19",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ee4511f5-8f3f-4536-961c-1e5d5f21c98b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ee4511f5-8f3f-4536-961c-1e5d5f21c98b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ee4511f5-8f3f-4536-961c-1e5d5f21c98b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ee4511f5-8f3f-4536-961c-1e5d5f21c98b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.19",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
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
  "path": "ee4511f5-8f3f-4536-961c-1e5d5f21c98b",
  "resource_type": "book",
  "version": 2
}