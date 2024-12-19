export default {
  "entity": {
    "id": "1983c472-ce5c-4233-ba5d-2917557e8e11",
    "name": "挺进快报 1967.2.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1983c472-ce5c-4233-ba5d-2917557e8e11/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1983c472-ce5c-4233-ba5d-2917557e8e11/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1983c472-ce5c-4233-ba5d-2917557e8e11/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.2.7",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
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
  "path": "1983c472-ce5c-4233-ba5d-2917557e8e11",
  "resource_type": "book",
  "version": 2
}