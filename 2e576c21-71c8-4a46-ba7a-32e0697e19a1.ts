export default {
  "entity": {
    "id": "2e576c21-71c8-4a46-ba7a-32e0697e19a1",
    "name": "哈工大 1974.3.16",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e576c21-71c8-4a46-ba7a-32e0697e19a1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e576c21-71c8-4a46-ba7a-32e0697e19a1/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e576c21-71c8-4a46-ba7a-32e0697e19a1/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e576c21-71c8-4a46-ba7a-32e0697e19a1/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】哈工大 1974.3.16",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1974,
            "month": 3,
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
  "path": "2e576c21-71c8-4a46-ba7a-32e0697e19a1",
  "resource_type": "book",
  "version": 2
}