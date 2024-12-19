export default {
  "entity": {
    "id": "1d9809c1-5b41-4d9a-9cbf-eba501a820da",
    "name": "挺进快报 1967.2.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1d9809c1-5b41-4d9a-9cbf-eba501a820da/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1d9809c1-5b41-4d9a-9cbf-eba501a820da/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1d9809c1-5b41-4d9a-9cbf-eba501a820da/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.2.13",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 13
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
  "path": "1d9809c1-5b41-4d9a-9cbf-eba501a820da",
  "resource_type": "book",
  "version": 2
}