export default {
  "entity": {
    "id": "d57901b4-c8cc-4cb5-9f55-6cd7f8ef2129",
    "name": "红色风暴 1968.5.16",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d57901b4-c8cc-4cb5-9f55-6cd7f8ef2129/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d57901b4-c8cc-4cb5-9f55-6cd7f8ef2129/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d57901b4-c8cc-4cb5-9f55-6cd7f8ef2129/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d57901b4-c8cc-4cb5-9f55-6cd7f8ef2129/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.5.16",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 5,
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
  "path": "d57901b4-c8cc-4cb5-9f55-6cd7f8ef2129",
  "resource_type": "book",
  "version": 2
}