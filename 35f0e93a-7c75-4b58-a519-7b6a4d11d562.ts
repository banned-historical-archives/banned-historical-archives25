export default {
  "entity": {
    "id": "35f0e93a-7c75-4b58-a519-7b6a4d11d562",
    "name": "红镇江报 1968.8.23",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/35f0e93a-7c75-4b58-a519-7b6a4d11d562/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/35f0e93a-7c75-4b58-a519-7b6a4d11d562/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/35f0e93a-7c75-4b58-a519-7b6a4d11d562/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/35f0e93a-7c75-4b58-a519-7b6a4d11d562/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.8.23",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 23
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
  "path": "35f0e93a-7c75-4b58-a519-7b6a4d11d562",
  "resource_type": "book",
  "version": 2
}