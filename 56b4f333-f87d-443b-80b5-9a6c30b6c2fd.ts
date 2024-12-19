export default {
  "entity": {
    "id": "56b4f333-f87d-443b-80b5-9a6c30b6c2fd",
    "name": "北京工人 1968.8.26",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/56b4f333-f87d-443b-80b5-9a6c30b6c2fd/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/56b4f333-f87d-443b-80b5-9a6c30b6c2fd/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/56b4f333-f87d-443b-80b5-9a6c30b6c2fd/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/56b4f333-f87d-443b-80b5-9a6c30b6c2fd/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】北京工人 1968.8.26",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 26
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
  "path": "56b4f333-f87d-443b-80b5-9a6c30b6c2fd",
  "resource_type": "book",
  "version": 2
}