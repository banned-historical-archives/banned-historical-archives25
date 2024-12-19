export default {
  "entity": {
    "id": "2487d529-ab0a-4fbd-a18f-a1bb1bd16c93",
    "name": "红色风暴 1968.5.5",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2487d529-ab0a-4fbd-a18f-a1bb1bd16c93/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2487d529-ab0a-4fbd-a18f-a1bb1bd16c93/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2487d529-ab0a-4fbd-a18f-a1bb1bd16c93/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2487d529-ab0a-4fbd-a18f-a1bb1bd16c93/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.5.5",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 5,
            "day": 5
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
  "path": "2487d529-ab0a-4fbd-a18f-a1bb1bd16c93",
  "resource_type": "book",
  "version": 2
}