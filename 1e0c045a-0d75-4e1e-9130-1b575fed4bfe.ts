export default {
  "entity": {
    "id": "1e0c045a-0d75-4e1e-9130-1b575fed4bfe",
    "name": "红镇江报 1968.9.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1e0c045a-0d75-4e1e-9130-1b575fed4bfe/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1e0c045a-0d75-4e1e-9130-1b575fed4bfe/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1e0c045a-0d75-4e1e-9130-1b575fed4bfe/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1e0c045a-0d75-4e1e-9130-1b575fed4bfe/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.25",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
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
  "path": "1e0c045a-0d75-4e1e-9130-1b575fed4bfe",
  "resource_type": "book",
  "version": 2
}