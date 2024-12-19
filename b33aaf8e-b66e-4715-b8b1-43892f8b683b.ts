export default {
  "entity": {
    "id": "b33aaf8e-b66e-4715-b8b1-43892f8b683b",
    "name": "上海红卫战报 1969.3.30",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b33aaf8e-b66e-4715-b8b1-43892f8b683b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b33aaf8e-b66e-4715-b8b1-43892f8b683b/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.3.30",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1969,
            "month": 3,
            "day": 30
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
  "path": "b33aaf8e-b66e-4715-b8b1-43892f8b683b",
  "resource_type": "book",
  "version": 2
}