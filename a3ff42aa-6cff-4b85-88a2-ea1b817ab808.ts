export default {
  "entity": {
    "id": "a3ff42aa-6cff-4b85-88a2-ea1b817ab808",
    "name": "文革通讯 1967.2.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a3ff42aa-6cff-4b85-88a2-ea1b817ab808/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a3ff42aa-6cff-4b85-88a2-ea1b817ab808/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯 1967.2.7",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 7
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
  "path": "a3ff42aa-6cff-4b85-88a2-ea1b817ab808",
  "resource_type": "book",
  "version": 2
}