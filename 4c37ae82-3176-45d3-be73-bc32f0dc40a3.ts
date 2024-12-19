export default {
  "entity": {
    "id": "4c37ae82-3176-45d3-be73-bc32f0dc40a3",
    "name": "文革通讯 1967.8.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4c37ae82-3176-45d3-be73-bc32f0dc40a3/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4c37ae82-3176-45d3-be73-bc32f0dc40a3/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4c37ae82-3176-45d3-be73-bc32f0dc40a3/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯 1967.8.25",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 25
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
  "path": "4c37ae82-3176-45d3-be73-bc32f0dc40a3",
  "resource_type": "book",
  "version": 2
}