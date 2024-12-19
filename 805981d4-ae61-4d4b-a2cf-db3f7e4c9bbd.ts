export default {
  "entity": {
    "id": "805981d4-ae61-4d4b-a2cf-db3f7e4c9bbd",
    "name": "挺进快报 1967.3.2",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/805981d4-ae61-4d4b-a2cf-db3f7e4c9bbd/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/805981d4-ae61-4d4b-a2cf-db3f7e4c9bbd/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/805981d4-ae61-4d4b-a2cf-db3f7e4c9bbd/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.3.2",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 3,
            "day": 2
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
  "path": "805981d4-ae61-4d4b-a2cf-db3f7e4c9bbd",
  "resource_type": "book",
  "version": 2
}