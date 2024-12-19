export default {
  "entity": {
    "id": "8b230888-4316-4c37-bd8d-e097c300e5fb",
    "name": "红色风暴 1969.3.22",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8b230888-4316-4c37-bd8d-e097c300e5fb/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8b230888-4316-4c37-bd8d-e097c300e5fb/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8b230888-4316-4c37-bd8d-e097c300e5fb/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8b230888-4316-4c37-bd8d-e097c300e5fb/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.3.22",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 3,
            "day": 22
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
  "path": "8b230888-4316-4c37-bd8d-e097c300e5fb",
  "resource_type": "book",
  "version": 2
}