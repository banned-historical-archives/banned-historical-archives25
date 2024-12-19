export default {
  "entity": {
    "id": "1933dc4e-3550-4a8a-8430-75bac98b3fb4",
    "name": "红色风暴 1968.9.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1933dc4e-3550-4a8a-8430-75bac98b3fb4/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1933dc4e-3550-4a8a-8430-75bac98b3fb4/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1933dc4e-3550-4a8a-8430-75bac98b3fb4/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1933dc4e-3550-4a8a-8430-75bac98b3fb4/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.9.27",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
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
  "path": "1933dc4e-3550-4a8a-8430-75bac98b3fb4",
  "resource_type": "book",
  "version": 2
}