export default {
  "entity": {
    "id": "083dd14e-f10f-41ca-9b7c-1726609157f1",
    "name": "文革消息 1967.9.18",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/083dd14e-f10f-41ca-9b7c-1726609157f1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/083dd14e-f10f-41ca-9b7c-1726609157f1/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/083dd14e-f10f-41ca-9b7c-1726609157f1/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革消息 1967.9.18",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 18
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
  "path": "083dd14e-f10f-41ca-9b7c-1726609157f1",
  "resource_type": "book",
  "version": 2
}