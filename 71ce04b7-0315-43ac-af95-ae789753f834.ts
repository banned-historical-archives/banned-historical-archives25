export default {
  "entity": {
    "id": "71ce04b7-0315-43ac-af95-ae789753f834",
    "name": "北京公社 1967.2.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71ce04b7-0315-43ac-af95-ae789753f834/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71ce04b7-0315-43ac-af95-ae789753f834/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71ce04b7-0315-43ac-af95-ae789753f834/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71ce04b7-0315-43ac-af95-ae789753f834/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】北京公社 1967.2.15",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 15
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
  "path": "71ce04b7-0315-43ac-af95-ae789753f834",
  "resource_type": "book",
  "version": 2
}