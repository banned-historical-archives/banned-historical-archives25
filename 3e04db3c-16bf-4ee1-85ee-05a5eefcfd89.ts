export default {
  "entity": {
    "id": "3e04db3c-16bf-4ee1-85ee-05a5eefcfd89",
    "name": "首都红卫兵 1966.9.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3e04db3c-16bf-4ee1-85ee-05a5eefcfd89/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3e04db3c-16bf-4ee1-85ee-05a5eefcfd89/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3e04db3c-16bf-4ee1-85ee-05a5eefcfd89/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3e04db3c-16bf-4ee1-85ee-05a5eefcfd89/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】首都红卫兵 1966.9.13",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1966,
            "month": 9,
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
  "path": "3e04db3c-16bf-4ee1-85ee-05a5eefcfd89",
  "resource_type": "book",
  "version": 2
}