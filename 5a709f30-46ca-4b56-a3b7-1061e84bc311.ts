export default {
  "entity": {
    "id": "5a709f30-46ca-4b56-a3b7-1061e84bc311",
    "name": "文革简讯 1967.7.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a709f30-46ca-4b56-a3b7-1061e84bc311/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a709f30-46ca-4b56-a3b7-1061e84bc311/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a709f30-46ca-4b56-a3b7-1061e84bc311/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革简讯 1967.7.17",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 7,
            "day": 17
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
  "path": "5a709f30-46ca-4b56-a3b7-1061e84bc311",
  "resource_type": "book",
  "version": 2
}