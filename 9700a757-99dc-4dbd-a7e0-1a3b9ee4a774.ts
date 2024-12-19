export default {
  "entity": {
    "id": "9700a757-99dc-4dbd-a7e0-1a3b9ee4a774",
    "name": "红色风暴 1969.1.5",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9700a757-99dc-4dbd-a7e0-1a3b9ee4a774/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9700a757-99dc-4dbd-a7e0-1a3b9ee4a774/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9700a757-99dc-4dbd-a7e0-1a3b9ee4a774/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/9700a757-99dc-4dbd-a7e0-1a3b9ee4a774/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.5",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 5
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
  "path": "9700a757-99dc-4dbd-a7e0-1a3b9ee4a774",
  "resource_type": "book",
  "version": 2
}