export default {
  "entity": {
    "id": "5f1cc5ec-728c-4557-8640-570de9827f2c",
    "name": "山东红卫兵 1967.4.30",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5f1cc5ec-728c-4557-8640-570de9827f2c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5f1cc5ec-728c-4557-8640-570de9827f2c/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】山东红卫兵 1967.4.30",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 4,
            "day": 30
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
  "path": "5f1cc5ec-728c-4557-8640-570de9827f2c",
  "resource_type": "book",
  "version": 2
}