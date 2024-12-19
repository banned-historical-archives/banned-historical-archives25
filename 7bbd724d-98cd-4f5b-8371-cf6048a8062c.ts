export default {
  "entity": {
    "id": "7bbd724d-98cd-4f5b-8371-cf6048a8062c",
    "name": "上海公安 1967.8.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7bbd724d-98cd-4f5b-8371-cf6048a8062c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7bbd724d-98cd-4f5b-8371-cf6048a8062c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7bbd724d-98cd-4f5b-8371-cf6048a8062c/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海公安 1967.8.27",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 8,
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
  "path": "7bbd724d-98cd-4f5b-8371-cf6048a8062c",
  "resource_type": "book",
  "version": 2
}