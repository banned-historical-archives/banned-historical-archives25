export default {
  "entity": {
    "id": "47f7abe9-232e-42e2-b46a-14e0b182e95c",
    "name": "红卫兵报 1967.1.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/47f7abe9-232e-42e2-b46a-14e0b182e95c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/47f7abe9-232e-42e2-b46a-14e0b182e95c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/47f7abe9-232e-42e2-b46a-14e0b182e95c/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/47f7abe9-232e-42e2-b46a-14e0b182e95c/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫兵报 1967.1.9",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 1,
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
  "path": "47f7abe9-232e-42e2-b46a-14e0b182e95c",
  "resource_type": "book",
  "version": 2
}