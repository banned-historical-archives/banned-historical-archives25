export default {
  "entity": {
    "id": "7af40987-b0e0-49e3-9c9f-fa04f919cdf9",
    "name": "新北大 1967.1.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7af40987-b0e0-49e3-9c9f-fa04f919cdf9/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7af40987-b0e0-49e3-9c9f-fa04f919cdf9/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7af40987-b0e0-49e3-9c9f-fa04f919cdf9/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7af40987-b0e0-49e3-9c9f-fa04f919cdf9/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】新北大 1967.1.20",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 1,
            "day": 20
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
  "path": "7af40987-b0e0-49e3-9c9f-fa04f919cdf9",
  "resource_type": "book",
  "version": 2
}