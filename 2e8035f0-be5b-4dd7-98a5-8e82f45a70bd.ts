export default {
  "entity": {
    "id": "2e8035f0-be5b-4dd7-98a5-8e82f45a70bd",
    "name": "井冈山 1967.1.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8035f0-be5b-4dd7-98a5-8e82f45a70bd/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8035f0-be5b-4dd7-98a5-8e82f45a70bd/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8035f0-be5b-4dd7-98a5-8e82f45a70bd/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2e8035f0-be5b-4dd7-98a5-8e82f45a70bd/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】井冈山 1967.1.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 1,
            "day": 7
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
  "path": "2e8035f0-be5b-4dd7-98a5-8e82f45a70bd",
  "resource_type": "book",
  "version": 2
}