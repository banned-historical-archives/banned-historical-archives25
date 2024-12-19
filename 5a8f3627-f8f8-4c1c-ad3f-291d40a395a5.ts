export default {
  "entity": {
    "id": "5a8f3627-f8f8-4c1c-ad3f-291d40a395a5",
    "name": "挺进快报 1967.2.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a8f3627-f8f8-4c1c-ad3f-291d40a395a5/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a8f3627-f8f8-4c1c-ad3f-291d40a395a5/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a8f3627-f8f8-4c1c-ad3f-291d40a395a5/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.2.15",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 15
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
  "path": "5a8f3627-f8f8-4c1c-ad3f-291d40a395a5",
  "resource_type": "book",
  "version": 2
}