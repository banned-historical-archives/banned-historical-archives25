export default {
  "entity": {
    "id": "0ef48f02-eed2-41c3-9e75-e52faf7cbd44",
    "name": "红色风暴 1968.7.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0ef48f02-eed2-41c3-9e75-e52faf7cbd44/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0ef48f02-eed2-41c3-9e75-e52faf7cbd44/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0ef48f02-eed2-41c3-9e75-e52faf7cbd44/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0ef48f02-eed2-41c3-9e75-e52faf7cbd44/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.7.15",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
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
  "path": "0ef48f02-eed2-41c3-9e75-e52faf7cbd44",
  "resource_type": "book",
  "version": 2
}