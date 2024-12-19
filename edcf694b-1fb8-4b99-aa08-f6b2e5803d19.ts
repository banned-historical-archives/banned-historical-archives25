export default {
  "entity": {
    "id": "edcf694b-1fb8-4b99-aa08-f6b2e5803d19",
    "name": "挺进快报 1967.2.1",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/edcf694b-1fb8-4b99-aa08-f6b2e5803d19/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/edcf694b-1fb8-4b99-aa08-f6b2e5803d19/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.2.1",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 1
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
  "path": "edcf694b-1fb8-4b99-aa08-f6b2e5803d19",
  "resource_type": "book",
  "version": 2
}