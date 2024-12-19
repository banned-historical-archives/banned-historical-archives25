export default {
  "entity": {
    "id": "eda901e3-6d04-4b4a-8c56-257bafcc1617",
    "name": "文艺战报 1968.8.24",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/eda901e3-6d04-4b4a-8c56-257bafcc1617/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/eda901e3-6d04-4b4a-8c56-257bafcc1617/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/eda901e3-6d04-4b4a-8c56-257bafcc1617/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/eda901e3-6d04-4b4a-8c56-257bafcc1617/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文艺战报 1968.8.24",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 24
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
  "path": "eda901e3-6d04-4b4a-8c56-257bafcc1617",
  "resource_type": "book",
  "version": 2
}