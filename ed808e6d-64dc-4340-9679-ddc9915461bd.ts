export default {
  "entity": {
    "id": "ed808e6d-64dc-4340-9679-ddc9915461bd",
    "name": "东方红 1967.9.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ed808e6d-64dc-4340-9679-ddc9915461bd/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ed808e6d-64dc-4340-9679-ddc9915461bd/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ed808e6d-64dc-4340-9679-ddc9915461bd/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】东方红 1967.9.14",
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
  "path": "ed808e6d-64dc-4340-9679-ddc9915461bd",
  "resource_type": "book",
  "version": 2
}