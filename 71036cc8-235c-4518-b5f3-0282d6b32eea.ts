export default {
  "entity": {
    "id": "71036cc8-235c-4518-b5f3-0282d6b32eea",
    "name": "红色风暴 1968.4.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71036cc8-235c-4518-b5f3-0282d6b32eea/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71036cc8-235c-4518-b5f3-0282d6b32eea/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71036cc8-235c-4518-b5f3-0282d6b32eea/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/71036cc8-235c-4518-b5f3-0282d6b32eea/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.4.27",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 4,
            "day": 27
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
  "path": "71036cc8-235c-4518-b5f3-0282d6b32eea",
  "resource_type": "book",
  "version": 2
}