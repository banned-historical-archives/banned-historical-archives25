export default {
  "entity": {
    "id": "4b37d808-2d17-442d-9f9c-ffbd321a8224",
    "name": "挺进快报 1967.2.10",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4b37d808-2d17-442d-9f9c-ffbd321a8224/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4b37d808-2d17-442d-9f9c-ffbd321a8224/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4b37d808-2d17-442d-9f9c-ffbd321a8224/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.2.10",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 10
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
  "path": "4b37d808-2d17-442d-9f9c-ffbd321a8224",
  "resource_type": "book",
  "version": 2
}