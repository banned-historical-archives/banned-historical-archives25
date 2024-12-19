export default {
  "entity": {
    "id": "1b10dc37-087c-440d-add7-b3fe66ce0a41",
    "name": "大会专刊 1967.9.18",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1b10dc37-087c-440d-add7-b3fe66ce0a41/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1b10dc37-087c-440d-add7-b3fe66ce0a41/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1b10dc37-087c-440d-add7-b3fe66ce0a41/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1b10dc37-087c-440d-add7-b3fe66ce0a41/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1967.9.18",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 18
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
  "path": "1b10dc37-087c-440d-add7-b3fe66ce0a41",
  "resource_type": "book",
  "version": 2
}