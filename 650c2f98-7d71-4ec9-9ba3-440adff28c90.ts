export default {
  "entity": {
    "id": "650c2f98-7d71-4ec9-9ba3-440adff28c90",
    "name": "宣文战报 1967.4.12",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/650c2f98-7d71-4ec9-9ba3-440adff28c90/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/650c2f98-7d71-4ec9-9ba3-440adff28c90/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】宣文战报 1967.4.12",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 4,
            "day": 12
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
  "path": "650c2f98-7d71-4ec9-9ba3-440adff28c90",
  "resource_type": "book",
  "version": 2
}