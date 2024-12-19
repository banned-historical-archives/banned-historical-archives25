export default {
  "entity": {
    "id": "6d3ea69d-41a7-480d-bbff-f7de5de8161b",
    "name": "上海红卫战报 1969.1.18",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6d3ea69d-41a7-480d-bbff-f7de5de8161b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6d3ea69d-41a7-480d-bbff-f7de5de8161b/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.1.18",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1969,
            "month": 1,
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
  "path": "6d3ea69d-41a7-480d-bbff-f7de5de8161b",
  "resource_type": "book",
  "version": 2
}