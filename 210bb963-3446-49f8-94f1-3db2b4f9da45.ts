export default {
  "entity": {
    "id": "210bb963-3446-49f8-94f1-3db2b4f9da45",
    "name": "文革消息 1967.9.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/210bb963-3446-49f8-94f1-3db2b4f9da45/1.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/210bb963-3446-49f8-94f1-3db2b4f9da45/2.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/210bb963-3446-49f8-94f1-3db2b4f9da45/3.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/210bb963-3446-49f8-94f1-3db2b4f9da45/4.png"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革消息 1967.9.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
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
  "path": "210bb963-3446-49f8-94f1-3db2b4f9da45",
  "resource_type": "book",
  "version": 2
}