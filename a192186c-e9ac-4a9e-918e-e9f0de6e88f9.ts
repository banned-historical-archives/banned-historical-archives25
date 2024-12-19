export default {
  "entity": {
    "id": "a192186c-e9ac-4a9e-918e-e9f0de6e88f9",
    "name": "红镇江报 1968.8.18",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a192186c-e9ac-4a9e-918e-e9f0de6e88f9/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a192186c-e9ac-4a9e-918e-e9f0de6e88f9/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a192186c-e9ac-4a9e-918e-e9f0de6e88f9/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a192186c-e9ac-4a9e-918e-e9f0de6e88f9/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.8.18",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 18
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
  "path": "a192186c-e9ac-4a9e-918e-e9f0de6e88f9",
  "resource_type": "book",
  "version": 2
}