export default {
  "entity": {
    "id": "d56e2e28-a5e9-4f83-9cef-d0a7876c31c2",
    "name": "北京工人 1968.9.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d56e2e28-a5e9-4f83-9cef-d0a7876c31c2/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d56e2e28-a5e9-4f83-9cef-d0a7876c31c2/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】北京工人 1968.9.7",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1968,
            "month": 9,
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
  "path": "d56e2e28-a5e9-4f83-9cef-d0a7876c31c2",
  "resource_type": "book",
  "version": 2
}