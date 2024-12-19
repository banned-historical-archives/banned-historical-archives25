export default {
  "entity": {
    "id": "5ef417d0-4b96-4ca0-b53c-c8e5a3882bd7",
    "name": "红色风暴 1968.11.23",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5ef417d0-4b96-4ca0-b53c-c8e5a3882bd7/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5ef417d0-4b96-4ca0-b53c-c8e5a3882bd7/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5ef417d0-4b96-4ca0-b53c-c8e5a3882bd7/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5ef417d0-4b96-4ca0-b53c-c8e5a3882bd7/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.11.23",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 11,
            "day": 23
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
  "path": "5ef417d0-4b96-4ca0-b53c-c8e5a3882bd7",
  "resource_type": "book",
  "version": 2
}