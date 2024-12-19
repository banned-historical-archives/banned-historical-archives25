export default {
  "entity": {
    "id": "0e4e3c99-50eb-464c-8600-59422eab2ff4",
    "name": "红色风暴 1969.2.10",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0e4e3c99-50eb-464c-8600-59422eab2ff4/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0e4e3c99-50eb-464c-8600-59422eab2ff4/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0e4e3c99-50eb-464c-8600-59422eab2ff4/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0e4e3c99-50eb-464c-8600-59422eab2ff4/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.2.10",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 2,
            "day": 10
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
  "path": "0e4e3c99-50eb-464c-8600-59422eab2ff4",
  "resource_type": "book",
  "version": 2
}