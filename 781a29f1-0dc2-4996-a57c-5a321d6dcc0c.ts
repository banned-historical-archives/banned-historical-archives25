export default {
  "entity": {
    "id": "781a29f1-0dc2-4996-a57c-5a321d6dcc0c",
    "name": "红色风暴 1968.6.23",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/781a29f1-0dc2-4996-a57c-5a321d6dcc0c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/781a29f1-0dc2-4996-a57c-5a321d6dcc0c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/781a29f1-0dc2-4996-a57c-5a321d6dcc0c/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/781a29f1-0dc2-4996-a57c-5a321d6dcc0c/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.6.23",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 6,
            "day": 23
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
  "path": "781a29f1-0dc2-4996-a57c-5a321d6dcc0c",
  "resource_type": "book",
  "version": 2
}