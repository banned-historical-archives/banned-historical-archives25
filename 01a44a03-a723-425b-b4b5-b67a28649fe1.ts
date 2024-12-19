export default {
  "entity": {
    "id": "01a44a03-a723-425b-b4b5-b67a28649fe1",
    "name": "文革简讯 1967.7.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/01a44a03-a723-425b-b4b5-b67a28649fe1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/01a44a03-a723-425b-b4b5-b67a28649fe1/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/01a44a03-a723-425b-b4b5-b67a28649fe1/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革简讯 1967.7.15",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 7,
            "day": 15
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
  "path": "01a44a03-a723-425b-b4b5-b67a28649fe1",
  "resource_type": "book",
  "version": 2
}