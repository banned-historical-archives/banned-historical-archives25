export default {
  "entity": {
    "id": "53ca0d45-449c-4fbd-91c7-635e07552327",
    "name": "红卫兵报 1971.11.16",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/53ca0d45-449c-4fbd-91c7-635e07552327/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/53ca0d45-449c-4fbd-91c7-635e07552327/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/53ca0d45-449c-4fbd-91c7-635e07552327/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/53ca0d45-449c-4fbd-91c7-635e07552327/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫兵报 1971.11.16",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1971,
            "month": 11,
            "day": 16
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
  "path": "53ca0d45-449c-4fbd-91c7-635e07552327",
  "resource_type": "book",
  "version": 2
}