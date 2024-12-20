export default {
  "entity": {
    "id": "5a2b76a5-f39f-478e-afba-26c3aa68d39d",
    "name": "电影批判 1967.8.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a2b76a5-f39f-478e-afba-26c3aa68d39d/1.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5a2b76a5-f39f-478e-afba-26c3aa68d39d/2.png"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】电影批判 1967.8.20",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 20
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
  "path": "5a2b76a5-f39f-478e-afba-26c3aa68d39d",
  "resource_type": "book",
  "version": 2
}