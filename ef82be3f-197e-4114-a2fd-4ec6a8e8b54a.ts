export default {
  "entity": {
    "id": "ef82be3f-197e-4114-a2fd-4ec6a8e8b54a",
    "name": "红色风暴 1968.12.12",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ef82be3f-197e-4114-a2fd-4ec6a8e8b54a/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ef82be3f-197e-4114-a2fd-4ec6a8e8b54a/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ef82be3f-197e-4114-a2fd-4ec6a8e8b54a/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ef82be3f-197e-4114-a2fd-4ec6a8e8b54a/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.12.12",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 12,
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
  "path": "ef82be3f-197e-4114-a2fd-4ec6a8e8b54a",
  "resource_type": "book",
  "version": 2
}