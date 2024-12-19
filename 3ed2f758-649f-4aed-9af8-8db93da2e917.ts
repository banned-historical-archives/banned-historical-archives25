export default {
  "entity": {
    "id": "3ed2f758-649f-4aed-9af8-8db93da2e917",
    "name": "红色风暴 1969.2.12",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3ed2f758-649f-4aed-9af8-8db93da2e917/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3ed2f758-649f-4aed-9af8-8db93da2e917/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3ed2f758-649f-4aed-9af8-8db93da2e917/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3ed2f758-649f-4aed-9af8-8db93da2e917/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.2.12",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 2,
            "day": 12
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
  "path": "3ed2f758-649f-4aed-9af8-8db93da2e917",
  "resource_type": "book",
  "version": 2
}