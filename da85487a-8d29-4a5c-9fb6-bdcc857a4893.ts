export default {
  "entity": {
    "id": "da85487a-8d29-4a5c-9fb6-bdcc857a4893",
    "name": "红旗 1967.9.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/da85487a-8d29-4a5c-9fb6-bdcc857a4893/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/da85487a-8d29-4a5c-9fb6-bdcc857a4893/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/da85487a-8d29-4a5c-9fb6-bdcc857a4893/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红旗 1967.9.14",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 14
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
  "path": "da85487a-8d29-4a5c-9fb6-bdcc857a4893",
  "resource_type": "book",
  "version": 2
}