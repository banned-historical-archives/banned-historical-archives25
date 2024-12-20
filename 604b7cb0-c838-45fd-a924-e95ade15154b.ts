export default {
  "entity": {
    "id": "604b7cb0-c838-45fd-a924-e95ade15154b",
    "name": "大会专刊 1967.10.6",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/604b7cb0-c838-45fd-a924-e95ade15154b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/604b7cb0-c838-45fd-a924-e95ade15154b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/604b7cb0-c838-45fd-a924-e95ade15154b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/604b7cb0-c838-45fd-a924-e95ade15154b/4.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/604b7cb0-c838-45fd-a924-e95ade15154b/5.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1967.10.6",
        "authors": [],
        "page_start": 1,
        "page_end": 5,
        "dates": [
          {
            "year": 1967,
            "month": 10,
            "day": 6
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
  "path": "604b7cb0-c838-45fd-a924-e95ade15154b",
  "resource_type": "book",
  "version": 2
}