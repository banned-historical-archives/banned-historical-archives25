export default {
  "entity": {
    "id": "ae89836f-fb6d-4ff4-b9de-fa0d2c1f5334",
    "name": "邮电战报 1967.8.4",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ae89836f-fb6d-4ff4-b9de-fa0d2c1f5334/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ae89836f-fb6d-4ff4-b9de-fa0d2c1f5334/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】邮电战报 1967.8.4",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 8,
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
  "path": "ae89836f-fb6d-4ff4-b9de-fa0d2c1f5334",
  "resource_type": "book",
  "version": 2
}