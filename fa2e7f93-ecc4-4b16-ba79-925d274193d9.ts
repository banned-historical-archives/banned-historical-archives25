export default {
  "entity": {
    "id": "fa2e7f93-ecc4-4b16-ba79-925d274193d9",
    "name": "大会专刊 1969.1.22",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fa2e7f93-ecc4-4b16-ba79-925d274193d9/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fa2e7f93-ecc4-4b16-ba79-925d274193d9/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fa2e7f93-ecc4-4b16-ba79-925d274193d9/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fa2e7f93-ecc4-4b16-ba79-925d274193d9/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1969.1.22",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 22
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
  "path": "fa2e7f93-ecc4-4b16-ba79-925d274193d9",
  "resource_type": "book",
  "version": 2
}