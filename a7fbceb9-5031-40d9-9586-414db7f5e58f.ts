export default {
  "entity": {
    "id": "a7fbceb9-5031-40d9-9586-414db7f5e58f",
    "name": "红镇江报 1968.9.26",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a7fbceb9-5031-40d9-9586-414db7f5e58f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a7fbceb9-5031-40d9-9586-414db7f5e58f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a7fbceb9-5031-40d9-9586-414db7f5e58f/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a7fbceb9-5031-40d9-9586-414db7f5e58f/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.26",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
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
  "path": "a7fbceb9-5031-40d9-9586-414db7f5e58f",
  "resource_type": "book",
  "version": 2
}