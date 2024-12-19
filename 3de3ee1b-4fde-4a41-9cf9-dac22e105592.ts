export default {
  "entity": {
    "id": "3de3ee1b-4fde-4a41-9cf9-dac22e105592",
    "name": "大批判 1967.8.5",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3de3ee1b-4fde-4a41-9cf9-dac22e105592/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3de3ee1b-4fde-4a41-9cf9-dac22e105592/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大批判 1967.8.5",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 5
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
  "path": "3de3ee1b-4fde-4a41-9cf9-dac22e105592",
  "resource_type": "book",
  "version": 2
}