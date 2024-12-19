export default {
  "entity": {
    "id": "a87f7edc-0780-4cfc-91f1-4fe653f2e531",
    "name": "红镇江报 1968.10.24",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a87f7edc-0780-4cfc-91f1-4fe653f2e531/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a87f7edc-0780-4cfc-91f1-4fe653f2e531/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a87f7edc-0780-4cfc-91f1-4fe653f2e531/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/a87f7edc-0780-4cfc-91f1-4fe653f2e531/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.24",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
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
  "path": "a87f7edc-0780-4cfc-91f1-4fe653f2e531",
  "resource_type": "book",
  "version": 2
}