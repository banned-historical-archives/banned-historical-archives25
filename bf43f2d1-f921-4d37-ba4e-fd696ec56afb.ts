export default {
  "entity": {
    "id": "bf43f2d1-f921-4d37-ba4e-fd696ec56afb",
    "name": "红色风暴 1969.3.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bf43f2d1-f921-4d37-ba4e-fd696ec56afb/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bf43f2d1-f921-4d37-ba4e-fd696ec56afb/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bf43f2d1-f921-4d37-ba4e-fd696ec56afb/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/bf43f2d1-f921-4d37-ba4e-fd696ec56afb/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.3.9",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 3,
            "day": 9
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
  "path": "bf43f2d1-f921-4d37-ba4e-fd696ec56afb",
  "resource_type": "book",
  "version": 2
}