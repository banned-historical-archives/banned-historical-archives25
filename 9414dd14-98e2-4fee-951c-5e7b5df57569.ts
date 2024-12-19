export default {
  "entity": {
    "id": "9414dd14-98e2-4fee-951c-5e7b5df57569",
    "name": "红镇江报 1968.10.26",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9414dd14-98e2-4fee-951c-5e7b5df57569/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9414dd14-98e2-4fee-951c-5e7b5df57569/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9414dd14-98e2-4fee-951c-5e7b5df57569/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9414dd14-98e2-4fee-951c-5e7b5df57569/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.26",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 26
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
  "path": "9414dd14-98e2-4fee-951c-5e7b5df57569",
  "resource_type": "book",
  "version": 2
}