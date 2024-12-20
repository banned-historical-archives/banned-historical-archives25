export default {
  "entity": {
    "id": "39ddd1a2-99f4-46cd-a65d-b80c754e830f",
    "name": "戏剧战报 1967.8.10",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/39ddd1a2-99f4-46cd-a65d-b80c754e830f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/39ddd1a2-99f4-46cd-a65d-b80c754e830f/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】戏剧战报 1967.8.10",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 10
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
  "path": "39ddd1a2-99f4-46cd-a65d-b80c754e830f",
  "resource_type": "book",
  "version": 2
}