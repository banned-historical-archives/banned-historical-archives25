export default {
  "entity": {
    "id": "3de97656-3078-40da-81d4-47046eda82fe",
    "name": "戏剧战报 1967.6.24",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3de97656-3078-40da-81d4-47046eda82fe/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3de97656-3078-40da-81d4-47046eda82fe/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】戏剧战报 1967.6.24",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 6,
            "day": 24
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
  "path": "3de97656-3078-40da-81d4-47046eda82fe",
  "resource_type": "book",
  "version": 2
}