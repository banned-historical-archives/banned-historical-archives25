export default {
  "entity": {
    "id": "28b88816-e305-405c-ae92-56403e83f9a1",
    "name": "北京公社 1967.2.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/28b88816-e305-405c-ae92-56403e83f9a1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/28b88816-e305-405c-ae92-56403e83f9a1/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/28b88816-e305-405c-ae92-56403e83f9a1/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/28b88816-e305-405c-ae92-56403e83f9a1/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】北京公社 1967.2.15",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 15
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
  "path": "28b88816-e305-405c-ae92-56403e83f9a1",
  "resource_type": "book",
  "version": 2
}