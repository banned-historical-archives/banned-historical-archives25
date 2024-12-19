export default {
  "entity": {
    "id": "b5ba0346-87b0-4695-8d2a-e6033914c73c",
    "name": "文艺战报 1968.6.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b5ba0346-87b0-4695-8d2a-e6033914c73c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b5ba0346-87b0-4695-8d2a-e6033914c73c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b5ba0346-87b0-4695-8d2a-e6033914c73c/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b5ba0346-87b0-4695-8d2a-e6033914c73c/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文艺战报 1968.6.14",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 6,
            "day": 14
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
  "path": "b5ba0346-87b0-4695-8d2a-e6033914c73c",
  "resource_type": "book",
  "version": 2
}