export default {
  "entity": {
    "id": "db7dba4f-5be6-4266-9a98-c6eb7dd32912",
    "name": "红色风暴 1967.4.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db7dba4f-5be6-4266-9a98-c6eb7dd32912/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db7dba4f-5be6-4266-9a98-c6eb7dd32912/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db7dba4f-5be6-4266-9a98-c6eb7dd32912/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db7dba4f-5be6-4266-9a98-c6eb7dd32912/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1967.4.25",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 4,
            "day": 25
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
  "path": "db7dba4f-5be6-4266-9a98-c6eb7dd32912",
  "resource_type": "book",
  "version": 2
}