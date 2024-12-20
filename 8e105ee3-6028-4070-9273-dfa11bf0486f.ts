export default {
  "entity": {
    "id": "8e105ee3-6028-4070-9273-dfa11bf0486f",
    "name": "北京消息 1967.9.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8e105ee3-6028-4070-9273-dfa11bf0486f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8e105ee3-6028-4070-9273-dfa11bf0486f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8e105ee3-6028-4070-9273-dfa11bf0486f/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】北京消息 1967.9.9",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 9
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
  "path": "8e105ee3-6028-4070-9273-dfa11bf0486f",
  "resource_type": "book",
  "version": 2
}