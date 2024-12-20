export default {
  "entity": {
    "id": "8d521413-d72d-41ab-84a3-f5a42307c9db",
    "name": "戏剧战报 1967.8.11",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8d521413-d72d-41ab-84a3-f5a42307c9db/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8d521413-d72d-41ab-84a3-f5a42307c9db/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】戏剧战报 1967.8.11",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 11
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
  "path": "8d521413-d72d-41ab-84a3-f5a42307c9db",
  "resource_type": "book",
  "version": 2
}