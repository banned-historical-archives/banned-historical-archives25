export default {
  "entity": {
    "id": "e02843d2-87d4-48f8-9367-b0e97a6ae100",
    "name": "大批判通讯 1967.9.1",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e02843d2-87d4-48f8-9367-b0e97a6ae100/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e02843d2-87d4-48f8-9367-b0e97a6ae100/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e02843d2-87d4-48f8-9367-b0e97a6ae100/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大批判通讯 1967.9.1",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 1
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
  "path": "e02843d2-87d4-48f8-9367-b0e97a6ae100",
  "resource_type": "book",
  "version": 2
}