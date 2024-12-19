export default {
  "entity": {
    "id": "e5b16d8b-264d-4c29-90c1-ce93ebd4a01a",
    "name": "红镇江报 1968.9.28",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e5b16d8b-264d-4c29-90c1-ce93ebd4a01a/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e5b16d8b-264d-4c29-90c1-ce93ebd4a01a/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e5b16d8b-264d-4c29-90c1-ce93ebd4a01a/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e5b16d8b-264d-4c29-90c1-ce93ebd4a01a/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.28",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 28
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
  "path": "e5b16d8b-264d-4c29-90c1-ce93ebd4a01a",
  "resource_type": "book",
  "version": 2
}