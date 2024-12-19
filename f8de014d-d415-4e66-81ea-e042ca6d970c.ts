export default {
  "entity": {
    "id": "f8de014d-d415-4e66-81ea-e042ca6d970c",
    "name": "文革通讯报导 1967.6.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f8de014d-d415-4e66-81ea-e042ca6d970c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f8de014d-d415-4e66-81ea-e042ca6d970c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f8de014d-d415-4e66-81ea-e042ca6d970c/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯报导 1967.6.25",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 6,
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
  "path": "f8de014d-d415-4e66-81ea-e042ca6d970c",
  "resource_type": "book",
  "version": 2
}