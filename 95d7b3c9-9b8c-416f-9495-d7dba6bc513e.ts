export default {
  "entity": {
    "id": "95d7b3c9-9b8c-416f-9495-d7dba6bc513e",
    "name": "文革通讯 1967.9.1",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/95d7b3c9-9b8c-416f-9495-d7dba6bc513e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/95d7b3c9-9b8c-416f-9495-d7dba6bc513e/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/95d7b3c9-9b8c-416f-9495-d7dba6bc513e/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯 1967.9.1",
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
  "path": "95d7b3c9-9b8c-416f-9495-d7dba6bc513e",
  "resource_type": "book",
  "version": 2
}