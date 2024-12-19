export default {
  "entity": {
    "id": "3410bb13-73d2-445b-a807-86c0d85b7aa1",
    "name": "红色风暴 1968.7.31",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3410bb13-73d2-445b-a807-86c0d85b7aa1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3410bb13-73d2-445b-a807-86c0d85b7aa1/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3410bb13-73d2-445b-a807-86c0d85b7aa1/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3410bb13-73d2-445b-a807-86c0d85b7aa1/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.7.31",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 7,
            "day": 31
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
  "path": "3410bb13-73d2-445b-a807-86c0d85b7aa1",
  "resource_type": "book",
  "version": 2
}