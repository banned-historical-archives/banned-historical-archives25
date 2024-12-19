export default {
  "entity": {
    "id": "82144e7a-19b4-4f47-b98c-d038c8b69fea",
    "name": "红色风暴 1968.10.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/82144e7a-19b4-4f47-b98c-d038c8b69fea/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/82144e7a-19b4-4f47-b98c-d038c8b69fea/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/82144e7a-19b4-4f47-b98c-d038c8b69fea/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/82144e7a-19b4-4f47-b98c-d038c8b69fea/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.10.9",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 9
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
  "path": "82144e7a-19b4-4f47-b98c-d038c8b69fea",
  "resource_type": "book",
  "version": 2
}