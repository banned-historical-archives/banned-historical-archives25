export default {
  "entity": {
    "id": "c9030b09-b01f-4e24-bfb0-84ed2e6da672",
    "name": "红镇江报 1968.10.16",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c9030b09-b01f-4e24-bfb0-84ed2e6da672/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c9030b09-b01f-4e24-bfb0-84ed2e6da672/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.16",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 16
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
  "path": "c9030b09-b01f-4e24-bfb0-84ed2e6da672",
  "resource_type": "book",
  "version": 2
}