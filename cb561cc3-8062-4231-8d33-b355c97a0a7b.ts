export default {
  "entity": {
    "id": "cb561cc3-8062-4231-8d33-b355c97a0a7b",
    "name": "红色风暴 1968.5.24",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb561cc3-8062-4231-8d33-b355c97a0a7b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb561cc3-8062-4231-8d33-b355c97a0a7b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb561cc3-8062-4231-8d33-b355c97a0a7b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb561cc3-8062-4231-8d33-b355c97a0a7b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.5.24",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 5,
            "day": 24
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
  "path": "cb561cc3-8062-4231-8d33-b355c97a0a7b",
  "resource_type": "book",
  "version": 2
}