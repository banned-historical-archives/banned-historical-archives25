export default {
  "entity": {
    "id": "0aad5c37-d79f-4679-9bd6-d89c9dcdcc6d",
    "name": "红旗 1967.3.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0aad5c37-d79f-4679-9bd6-d89c9dcdcc6d/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0aad5c37-d79f-4679-9bd6-d89c9dcdcc6d/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红旗 1967.3.25",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 3,
            "day": 25
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
  "path": "0aad5c37-d79f-4679-9bd6-d89c9dcdcc6d",
  "resource_type": "book",
  "version": 2
}