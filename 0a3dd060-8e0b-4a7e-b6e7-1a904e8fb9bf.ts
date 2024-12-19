export default {
  "entity": {
    "id": "0a3dd060-8e0b-4a7e-b6e7-1a904e8fb9bf",
    "name": "红旗 1967.9.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a3dd060-8e0b-4a7e-b6e7-1a904e8fb9bf/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a3dd060-8e0b-4a7e-b6e7-1a904e8fb9bf/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0a3dd060-8e0b-4a7e-b6e7-1a904e8fb9bf/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红旗 1967.9.13",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
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
  "path": "0a3dd060-8e0b-4a7e-b6e7-1a904e8fb9bf",
  "resource_type": "book",
  "version": 2
}