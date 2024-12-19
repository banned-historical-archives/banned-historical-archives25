export default {
  "entity": {
    "id": "8cbc529e-73ab-4e49-93e6-9a8cfa0c886f",
    "name": "红色风暴 1969.2.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbc529e-73ab-4e49-93e6-9a8cfa0c886f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbc529e-73ab-4e49-93e6-9a8cfa0c886f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbc529e-73ab-4e49-93e6-9a8cfa0c886f/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8cbc529e-73ab-4e49-93e6-9a8cfa0c886f/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.2.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 2,
            "day": 21
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
  "path": "8cbc529e-73ab-4e49-93e6-9a8cfa0c886f",
  "resource_type": "book",
  "version": 2
}