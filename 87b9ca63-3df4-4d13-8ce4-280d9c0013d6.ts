export default {
  "entity": {
    "id": "87b9ca63-3df4-4d13-8ce4-280d9c0013d6",
    "name": "红卫战报 1966.11.11",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/87b9ca63-3df4-4d13-8ce4-280d9c0013d6/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/87b9ca63-3df4-4d13-8ce4-280d9c0013d6/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/87b9ca63-3df4-4d13-8ce4-280d9c0013d6/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/87b9ca63-3df4-4d13-8ce4-280d9c0013d6/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫战报 1966.11.11",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1966,
            "month": 11,
            "day": 11
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
  "path": "87b9ca63-3df4-4d13-8ce4-280d9c0013d6",
  "resource_type": "book",
  "version": 2
}