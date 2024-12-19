export default {
  "entity": {
    "id": "99d8512f-ba96-4b22-a39c-f7c5da29068b",
    "name": "文艺战报 1968.4.26",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/99d8512f-ba96-4b22-a39c-f7c5da29068b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/99d8512f-ba96-4b22-a39c-f7c5da29068b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/99d8512f-ba96-4b22-a39c-f7c5da29068b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/99d8512f-ba96-4b22-a39c-f7c5da29068b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文艺战报 1968.4.26",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 4,
            "day": 26
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
  "path": "99d8512f-ba96-4b22-a39c-f7c5da29068b",
  "resource_type": "book",
  "version": 2
}