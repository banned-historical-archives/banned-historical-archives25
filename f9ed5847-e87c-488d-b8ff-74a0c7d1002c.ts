export default {
  "entity": {
    "id": "f9ed5847-e87c-488d-b8ff-74a0c7d1002c",
    "name": "上海公安 1967.8.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f9ed5847-e87c-488d-b8ff-74a0c7d1002c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f9ed5847-e87c-488d-b8ff-74a0c7d1002c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f9ed5847-e87c-488d-b8ff-74a0c7d1002c/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海公安 1967.8.27",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 27
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
  "path": "f9ed5847-e87c-488d-b8ff-74a0c7d1002c",
  "resource_type": "book",
  "version": 2
}