export default {
  "entity": {
    "id": "c50edb2e-d259-446d-85d5-43557a6bc8f9",
    "name": "红镇江报 1968.9.25 下午",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c50edb2e-d259-446d-85d5-43557a6bc8f9/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c50edb2e-d259-446d-85d5-43557a6bc8f9/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.25 下午",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 25
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
  "path": "c50edb2e-d259-446d-85d5-43557a6bc8f9",
  "resource_type": "book",
  "version": 2
}