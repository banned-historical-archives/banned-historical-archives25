export default {
  "entity": {
    "id": "977aa20c-a286-47fc-b7e4-b41e2ad556d6",
    "name": "红色风暴 1968.12.5",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/977aa20c-a286-47fc-b7e4-b41e2ad556d6/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/977aa20c-a286-47fc-b7e4-b41e2ad556d6/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/977aa20c-a286-47fc-b7e4-b41e2ad556d6/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/977aa20c-a286-47fc-b7e4-b41e2ad556d6/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.12.5",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 12,
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
  "path": "977aa20c-a286-47fc-b7e4-b41e2ad556d6",
  "resource_type": "book",
  "version": 2
}