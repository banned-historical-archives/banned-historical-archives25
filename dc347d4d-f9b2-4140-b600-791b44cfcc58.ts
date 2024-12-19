export default {
  "entity": {
    "id": "dc347d4d-f9b2-4140-b600-791b44cfcc58",
    "name": "红镇江报 1968.8.22",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/dc347d4d-f9b2-4140-b600-791b44cfcc58/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/dc347d4d-f9b2-4140-b600-791b44cfcc58/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/dc347d4d-f9b2-4140-b600-791b44cfcc58/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/dc347d4d-f9b2-4140-b600-791b44cfcc58/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.8.22",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 22
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
  "path": "dc347d4d-f9b2-4140-b600-791b44cfcc58",
  "resource_type": "book",
  "version": 2
}