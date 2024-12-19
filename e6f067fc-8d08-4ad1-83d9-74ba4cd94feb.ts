export default {
  "entity": {
    "id": "e6f067fc-8d08-4ad1-83d9-74ba4cd94feb",
    "name": "文艺 1968.3.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6f067fc-8d08-4ad1-83d9-74ba4cd94feb/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6f067fc-8d08-4ad1-83d9-74ba4cd94feb/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6f067fc-8d08-4ad1-83d9-74ba4cd94feb/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e6f067fc-8d08-4ad1-83d9-74ba4cd94feb/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文艺 1968.3.13",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 3,
            "day": 13
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
  "path": "e6f067fc-8d08-4ad1-83d9-74ba4cd94feb",
  "resource_type": "book",
  "version": 2
}