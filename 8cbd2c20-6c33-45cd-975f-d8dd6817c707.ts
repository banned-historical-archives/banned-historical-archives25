export default {
  "entity": {
    "id": "8cbd2c20-6c33-45cd-975f-d8dd6817c707",
    "name": "红色风暴 1968.9.18",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbd2c20-6c33-45cd-975f-d8dd6817c707/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbd2c20-6c33-45cd-975f-d8dd6817c707/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbd2c20-6c33-45cd-975f-d8dd6817c707/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbd2c20-6c33-45cd-975f-d8dd6817c707/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.9.18",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 18
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
  "path": "8cbd2c20-6c33-45cd-975f-d8dd6817c707",
  "resource_type": "book",
  "version": 2
}