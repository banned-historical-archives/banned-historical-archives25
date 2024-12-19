export default {
  "entity": {
    "id": "9f11cf55-73ae-4342-8d8a-099a64e6fcaa",
    "name": "红色风暴 1969.1.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9f11cf55-73ae-4342-8d8a-099a64e6fcaa/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9f11cf55-73ae-4342-8d8a-099a64e6fcaa/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9f11cf55-73ae-4342-8d8a-099a64e6fcaa/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9f11cf55-73ae-4342-8d8a-099a64e6fcaa/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.8",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
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
  "path": "9f11cf55-73ae-4342-8d8a-099a64e6fcaa",
  "resource_type": "book",
  "version": 2
}