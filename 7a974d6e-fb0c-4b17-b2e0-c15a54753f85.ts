export default {
  "entity": {
    "id": "7a974d6e-fb0c-4b17-b2e0-c15a54753f85",
    "name": "文革通讯 1967.3.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7a974d6e-fb0c-4b17-b2e0-c15a54753f85/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7a974d6e-fb0c-4b17-b2e0-c15a54753f85/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7a974d6e-fb0c-4b17-b2e0-c15a54753f85/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯 1967.3.14",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 3,
            "day": 14
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
  "path": "7a974d6e-fb0c-4b17-b2e0-c15a54753f85",
  "resource_type": "book",
  "version": 2
}