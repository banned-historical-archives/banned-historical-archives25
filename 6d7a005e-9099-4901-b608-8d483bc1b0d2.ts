export default {
  "entity": {
    "id": "6d7a005e-9099-4901-b608-8d483bc1b0d2",
    "name": "红色风暴 1969.3.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6d7a005e-9099-4901-b608-8d483bc1b0d2/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6d7a005e-9099-4901-b608-8d483bc1b0d2/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6d7a005e-9099-4901-b608-8d483bc1b0d2/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6d7a005e-9099-4901-b608-8d483bc1b0d2/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.3.17",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 3,
            "day": 17
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
  "path": "6d7a005e-9099-4901-b608-8d483bc1b0d2",
  "resource_type": "book",
  "version": 2
}