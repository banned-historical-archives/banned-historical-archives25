export default {
  "entity": {
    "id": "d66fe0a9-d83a-4dc1-baf2-dc5c8ab7d203",
    "name": "扫盲战报 1958.3.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d66fe0a9-d83a-4dc1-baf2-dc5c8ab7d203/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d66fe0a9-d83a-4dc1-baf2-dc5c8ab7d203/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】扫盲战报 1958.3.13",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1958,
            "month": 3,
            "day": 13
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
  "path": "d66fe0a9-d83a-4dc1-baf2-dc5c8ab7d203",
  "resource_type": "book",
  "version": 2
}