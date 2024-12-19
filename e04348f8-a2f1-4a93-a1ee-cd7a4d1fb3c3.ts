export default {
  "entity": {
    "id": "e04348f8-a2f1-4a93-a1ee-cd7a4d1fb3c3",
    "name": "红色风暴 1968.9.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e04348f8-a2f1-4a93-a1ee-cd7a4d1fb3c3/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e04348f8-a2f1-4a93-a1ee-cd7a4d1fb3c3/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e04348f8-a2f1-4a93-a1ee-cd7a4d1fb3c3/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e04348f8-a2f1-4a93-a1ee-cd7a4d1fb3c3/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.9.15",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
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
  "path": "e04348f8-a2f1-4a93-a1ee-cd7a4d1fb3c3",
  "resource_type": "book",
  "version": 2
}