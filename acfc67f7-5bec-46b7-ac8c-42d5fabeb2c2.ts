export default {
  "entity": {
    "id": "acfc67f7-5bec-46b7-ac8c-42d5fabeb2c2",
    "name": "进军报 1967.3.5",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/acfc67f7-5bec-46b7-ac8c-42d5fabeb2c2/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/acfc67f7-5bec-46b7-ac8c-42d5fabeb2c2/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】进军报 1967.3.5",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 3,
            "day": 5
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
  "path": "acfc67f7-5bec-46b7-ac8c-42d5fabeb2c2",
  "resource_type": "book",
  "version": 2
}