export default {
  "entity": {
    "id": "0fcc4582-8fbb-46c4-a833-76dff813d507",
    "name": "上海红卫战报 1968.8.6",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0fcc4582-8fbb-46c4-a833-76dff813d507/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0fcc4582-8fbb-46c4-a833-76dff813d507/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0fcc4582-8fbb-46c4-a833-76dff813d507/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0fcc4582-8fbb-46c4-a833-76dff813d507/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1968.8.6",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 6
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
  "path": "0fcc4582-8fbb-46c4-a833-76dff813d507",
  "resource_type": "book",
  "version": 2
}