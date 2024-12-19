export default {
  "entity": {
    "id": "e2e9c3cc-44f4-47f1-96ed-68494c2d4a33",
    "name": "红色风暴 1969.2.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2e9c3cc-44f4-47f1-96ed-68494c2d4a33/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2e9c3cc-44f4-47f1-96ed-68494c2d4a33/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2e9c3cc-44f4-47f1-96ed-68494c2d4a33/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e2e9c3cc-44f4-47f1-96ed-68494c2d4a33/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.2.15",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 2,
            "day": 15
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
  "path": "e2e9c3cc-44f4-47f1-96ed-68494c2d4a33",
  "resource_type": "book",
  "version": 2
}