export default {
  "entity": {
    "id": "ca1210e4-377c-4a0e-9367-f1c21bc2ce3a",
    "name": "战报 1916.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ca1210e4-377c-4a0e-9367-f1c21bc2ce3a/1.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】战报 1916.20",
        "authors": [],
        "page_start": 1,
        "page_end": 1,
        "dates": [
          {
            "year": 1916,
            "month": 20
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
  "path": "ca1210e4-377c-4a0e-9367-f1c21bc2ce3a",
  "resource_type": "book",
  "version": 2
}