export default {
  "entity": {
    "id": "a334080b-cf11-4c63-932d-ad8c3399c895",
    "name": "红镇江报 1968.10.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a334080b-cf11-4c63-932d-ad8c3399c895/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a334080b-cf11-4c63-932d-ad8c3399c895/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a334080b-cf11-4c63-932d-ad8c3399c895/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a334080b-cf11-4c63-932d-ad8c3399c895/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.8",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 8
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
  "path": "a334080b-cf11-4c63-932d-ad8c3399c895",
  "resource_type": "book",
  "version": 2
}