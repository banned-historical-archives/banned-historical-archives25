export default {
  "entity": {
    "id": "c6aaab4d-f78a-4c11-806b-ee640bf2a629",
    "name": "红医简报 1967.9.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c6aaab4d-f78a-4c11-806b-ee640bf2a629/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c6aaab4d-f78a-4c11-806b-ee640bf2a629/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c6aaab4d-f78a-4c11-806b-ee640bf2a629/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红医简报 1967.9.8",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
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
  "path": "c6aaab4d-f78a-4c11-806b-ee640bf2a629",
  "resource_type": "book",
  "version": 2
}