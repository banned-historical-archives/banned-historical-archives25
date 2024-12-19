export default {
  "entity": {
    "id": "e2f54f7f-b45d-4b1f-ab1c-9c18702bfa97",
    "name": "红色风暴 1969.2.3",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2f54f7f-b45d-4b1f-ab1c-9c18702bfa97/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2f54f7f-b45d-4b1f-ab1c-9c18702bfa97/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2f54f7f-b45d-4b1f-ab1c-9c18702bfa97/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2f54f7f-b45d-4b1f-ab1c-9c18702bfa97/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.2.3",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 2,
            "day": 3
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
  "path": "e2f54f7f-b45d-4b1f-ab1c-9c18702bfa97",
  "resource_type": "book",
  "version": 2
}