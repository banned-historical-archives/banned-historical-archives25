export default {
  "entity": {
    "id": "c5a4b100-7320-4eaf-86f6-93c7fd48559a",
    "name": "红镇江报 1968.8.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c5a4b100-7320-4eaf-86f6-93c7fd48559a/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c5a4b100-7320-4eaf-86f6-93c7fd48559a/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c5a4b100-7320-4eaf-86f6-93c7fd48559a/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c5a4b100-7320-4eaf-86f6-93c7fd48559a/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.8.9",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 9
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
  "path": "c5a4b100-7320-4eaf-86f6-93c7fd48559a",
  "resource_type": "book",
  "version": 2
}