export default {
  "entity": {
    "id": "b4b44f47-de76-45cf-816b-2a491adb21e3",
    "name": "文革通讯 1967.2.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b4b44f47-de76-45cf-816b-2a491adb21e3/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b4b44f47-de76-45cf-816b-2a491adb21e3/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b4b44f47-de76-45cf-816b-2a491adb21e3/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯 1967.2.17",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 2,
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
  "path": "b4b44f47-de76-45cf-816b-2a491adb21e3",
  "resource_type": "book",
  "version": 2
}