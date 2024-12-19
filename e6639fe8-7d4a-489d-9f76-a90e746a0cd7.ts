export default {
  "entity": {
    "id": "e6639fe8-7d4a-489d-9f76-a90e746a0cd7",
    "name": "红色风暴 1968.5.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6639fe8-7d4a-489d-9f76-a90e746a0cd7/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6639fe8-7d4a-489d-9f76-a90e746a0cd7/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6639fe8-7d4a-489d-9f76-a90e746a0cd7/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6639fe8-7d4a-489d-9f76-a90e746a0cd7/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.5.27",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 5,
            "day": 27
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
  "path": "e6639fe8-7d4a-489d-9f76-a90e746a0cd7",
  "resource_type": "book",
  "version": 2
}