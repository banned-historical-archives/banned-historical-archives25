export default {
  "entity": {
    "id": "9b1564f2-675d-48c7-8ad0-db00b5c256f5",
    "name": "红色风暴 1968.6.4",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9b1564f2-675d-48c7-8ad0-db00b5c256f5/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9b1564f2-675d-48c7-8ad0-db00b5c256f5/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9b1564f2-675d-48c7-8ad0-db00b5c256f5/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9b1564f2-675d-48c7-8ad0-db00b5c256f5/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.6.4",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 6,
            "day": 4
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
  "path": "9b1564f2-675d-48c7-8ad0-db00b5c256f5",
  "resource_type": "book",
  "version": 2
}