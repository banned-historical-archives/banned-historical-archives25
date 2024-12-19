export default {
  "entity": {
    "id": "ea39986c-eb51-4da5-904b-6c1bf62a6dab",
    "name": "红色风暴 1968.12.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea39986c-eb51-4da5-904b-6c1bf62a6dab/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea39986c-eb51-4da5-904b-6c1bf62a6dab/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea39986c-eb51-4da5-904b-6c1bf62a6dab/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea39986c-eb51-4da5-904b-6c1bf62a6dab/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.12.8",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 12,
            "day": 8
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
  "path": "ea39986c-eb51-4da5-904b-6c1bf62a6dab",
  "resource_type": "book",
  "version": 2
}