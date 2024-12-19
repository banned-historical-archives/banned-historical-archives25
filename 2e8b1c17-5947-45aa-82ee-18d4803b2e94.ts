export default {
  "entity": {
    "id": "2e8b1c17-5947-45aa-82ee-18d4803b2e94",
    "name": "中学文革 1967.9.3",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8b1c17-5947-45aa-82ee-18d4803b2e94/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8b1c17-5947-45aa-82ee-18d4803b2e94/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8b1c17-5947-45aa-82ee-18d4803b2e94/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】中学文革 1967.9.3",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 3
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
  "path": "2e8b1c17-5947-45aa-82ee-18d4803b2e94",
  "resource_type": "book",
  "version": 2
}