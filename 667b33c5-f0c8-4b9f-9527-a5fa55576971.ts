export default {
  "entity": {
    "id": "667b33c5-f0c8-4b9f-9527-a5fa55576971",
    "name": "红镇江报 1968.9.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/667b33c5-f0c8-4b9f-9527-a5fa55576971/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/667b33c5-f0c8-4b9f-9527-a5fa55576971/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/667b33c5-f0c8-4b9f-9527-a5fa55576971/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/667b33c5-f0c8-4b9f-9527-a5fa55576971/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.20",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 20
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
  "path": "667b33c5-f0c8-4b9f-9527-a5fa55576971",
  "resource_type": "book",
  "version": 2
}