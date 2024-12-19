export default {
  "entity": {
    "id": "41798dbc-b65f-44e8-acf8-948fc270420e",
    "name": "红色风暴 1968.11.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/41798dbc-b65f-44e8-acf8-948fc270420e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/41798dbc-b65f-44e8-acf8-948fc270420e/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/41798dbc-b65f-44e8-acf8-948fc270420e/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/41798dbc-b65f-44e8-acf8-948fc270420e/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.11.17",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 11,
            "day": 17
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
  "path": "41798dbc-b65f-44e8-acf8-948fc270420e",
  "resource_type": "book",
  "version": 2
}