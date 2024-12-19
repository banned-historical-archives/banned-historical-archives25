export default {
  "entity": {
    "id": "481d186c-e721-404a-ab75-c68efd09f9c9",
    "name": "上海红卫战报 1969.4.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/481d186c-e721-404a-ab75-c68efd09f9c9/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/481d186c-e721-404a-ab75-c68efd09f9c9/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/481d186c-e721-404a-ab75-c68efd09f9c9/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/481d186c-e721-404a-ab75-c68efd09f9c9/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.4.14",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 4,
            "day": 14
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
  "path": "481d186c-e721-404a-ab75-c68efd09f9c9",
  "resource_type": "book",
  "version": 2
}