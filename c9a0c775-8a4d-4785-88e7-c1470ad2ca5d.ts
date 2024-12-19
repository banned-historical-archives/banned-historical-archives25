export default {
  "entity": {
    "id": "c9a0c775-8a4d-4785-88e7-c1470ad2ca5d",
    "name": "文革资料 1967.9.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c9a0c775-8a4d-4785-88e7-c1470ad2ca5d/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c9a0c775-8a4d-4785-88e7-c1470ad2ca5d/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c9a0c775-8a4d-4785-88e7-c1470ad2ca5d/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革资料 1967.9.13",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 13
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
  "path": "c9a0c775-8a4d-4785-88e7-c1470ad2ca5d",
  "resource_type": "book",
  "version": 2
}