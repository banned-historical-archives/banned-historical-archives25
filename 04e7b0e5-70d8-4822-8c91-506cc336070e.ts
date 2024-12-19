export default {
  "entity": {
    "id": "04e7b0e5-70d8-4822-8c91-506cc336070e",
    "name": "上海公安 1967.9.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/04e7b0e5-70d8-4822-8c91-506cc336070e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/04e7b0e5-70d8-4822-8c91-506cc336070e/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/04e7b0e5-70d8-4822-8c91-506cc336070e/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海公安 1967.9.8",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 8
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
  "path": "04e7b0e5-70d8-4822-8c91-506cc336070e",
  "resource_type": "book",
  "version": 2
}