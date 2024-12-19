export default {
  "entity": {
    "id": "50705a40-adff-4f74-b6d1-3c0d0cf68938",
    "name": "红卫兵报 1966.10.19",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/50705a40-adff-4f74-b6d1-3c0d0cf68938/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/50705a40-adff-4f74-b6d1-3c0d0cf68938/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/50705a40-adff-4f74-b6d1-3c0d0cf68938/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/50705a40-adff-4f74-b6d1-3c0d0cf68938/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫兵报 1966.10.19",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1966,
            "month": 10,
            "day": 19
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
  "path": "50705a40-adff-4f74-b6d1-3c0d0cf68938",
  "resource_type": "book",
  "version": 2
}