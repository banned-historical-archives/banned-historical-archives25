export default {
  "entity": {
    "id": "59b46ddd-162b-4c06-a0e8-703c14052e9e",
    "name": "红镇江报 1968.10.10",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/59b46ddd-162b-4c06-a0e8-703c14052e9e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/59b46ddd-162b-4c06-a0e8-703c14052e9e/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/59b46ddd-162b-4c06-a0e8-703c14052e9e/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.10",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 10
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
  "path": "59b46ddd-162b-4c06-a0e8-703c14052e9e",
  "resource_type": "book",
  "version": 2
}