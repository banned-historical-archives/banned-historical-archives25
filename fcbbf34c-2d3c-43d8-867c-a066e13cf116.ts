export default {
  "entity": {
    "id": "fcbbf34c-2d3c-43d8-867c-a066e13cf116",
    "name": "上海红卫战报 1969.1.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fcbbf34c-2d3c-43d8-867c-a066e13cf116/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fcbbf34c-2d3c-43d8-867c-a066e13cf116/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fcbbf34c-2d3c-43d8-867c-a066e13cf116/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fcbbf34c-2d3c-43d8-867c-a066e13cf116/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.1.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
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
  "path": "fcbbf34c-2d3c-43d8-867c-a066e13cf116",
  "resource_type": "book",
  "version": 2
}