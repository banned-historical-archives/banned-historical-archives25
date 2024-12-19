export default {
  "entity": {
    "id": "f0a6cdf6-a09b-4faf-9f09-1875812d50af",
    "name": "红色风暴 1969.4.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f0a6cdf6-a09b-4faf-9f09-1875812d50af/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f0a6cdf6-a09b-4faf-9f09-1875812d50af/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f0a6cdf6-a09b-4faf-9f09-1875812d50af/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f0a6cdf6-a09b-4faf-9f09-1875812d50af/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.4.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 4,
            "day": 7
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
  "path": "f0a6cdf6-a09b-4faf-9f09-1875812d50af",
  "resource_type": "book",
  "version": 2
}