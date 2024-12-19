export default {
  "entity": {
    "id": "4ac330c8-f34f-4d30-844f-9fd98773f4c0",
    "name": "文革通讯 1967.2.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4ac330c8-f34f-4d30-844f-9fd98773f4c0/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4ac330c8-f34f-4d30-844f-9fd98773f4c0/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4ac330c8-f34f-4d30-844f-9fd98773f4c0/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯 1967.2.15",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
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
  "path": "4ac330c8-f34f-4d30-844f-9fd98773f4c0",
  "resource_type": "book",
  "version": 2
}