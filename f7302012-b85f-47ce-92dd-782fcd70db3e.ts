export default {
  "entity": {
    "id": "f7302012-b85f-47ce-92dd-782fcd70db3e",
    "name": "红色风暴 1969.1.11",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f7302012-b85f-47ce-92dd-782fcd70db3e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f7302012-b85f-47ce-92dd-782fcd70db3e/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f7302012-b85f-47ce-92dd-782fcd70db3e/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f7302012-b85f-47ce-92dd-782fcd70db3e/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.11",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 11
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
  "path": "f7302012-b85f-47ce-92dd-782fcd70db3e",
  "resource_type": "book",
  "version": 2
}