export default {
  "entity": {
    "id": "1461a46e-f733-4666-8d1c-c067aaee17ab",
    "name": "工地战报 1976.11.23",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1461a46e-f733-4666-8d1c-c067aaee17ab/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1461a46e-f733-4666-8d1c-c067aaee17ab/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】工地战报 1976.11.23",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1976,
            "month": 11,
            "day": 23
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
  "path": "1461a46e-f733-4666-8d1c-c067aaee17ab",
  "resource_type": "book",
  "version": 2
}