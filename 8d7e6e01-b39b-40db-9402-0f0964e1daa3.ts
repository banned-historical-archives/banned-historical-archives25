export default {
  "entity": {
    "id": "8d7e6e01-b39b-40db-9402-0f0964e1daa3",
    "name": "上海红卫战报 1968.7.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8d7e6e01-b39b-40db-9402-0f0964e1daa3/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8d7e6e01-b39b-40db-9402-0f0964e1daa3/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8d7e6e01-b39b-40db-9402-0f0964e1daa3/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8d7e6e01-b39b-40db-9402-0f0964e1daa3/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1968.7.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 7,
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
  "path": "8d7e6e01-b39b-40db-9402-0f0964e1daa3",
  "resource_type": "book",
  "version": 2
}