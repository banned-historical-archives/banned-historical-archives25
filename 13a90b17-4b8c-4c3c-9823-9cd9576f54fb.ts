export default {
  "entity": {
    "id": "13a90b17-4b8c-4c3c-9823-9cd9576f54fb",
    "name": "红色风暴 1968.10.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/13a90b17-4b8c-4c3c-9823-9cd9576f54fb/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/13a90b17-4b8c-4c3c-9823-9cd9576f54fb/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/13a90b17-4b8c-4c3c-9823-9cd9576f54fb/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/13a90b17-4b8c-4c3c-9823-9cd9576f54fb/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.10.25",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 25
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
  "path": "13a90b17-4b8c-4c3c-9823-9cd9576f54fb",
  "resource_type": "book",
  "version": 2
}