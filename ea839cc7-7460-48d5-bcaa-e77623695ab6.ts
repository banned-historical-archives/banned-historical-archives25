export default {
  "entity": {
    "id": "ea839cc7-7460-48d5-bcaa-e77623695ab6",
    "name": "挺进快报 1967.1.31",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea839cc7-7460-48d5-bcaa-e77623695ab6/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea839cc7-7460-48d5-bcaa-e77623695ab6/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.1.31",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 1,
            "day": 31
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
  "path": "ea839cc7-7460-48d5-bcaa-e77623695ab6",
  "resource_type": "book",
  "version": 2
}