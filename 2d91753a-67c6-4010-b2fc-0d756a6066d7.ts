export default {
  "entity": {
    "id": "2d91753a-67c6-4010-b2fc-0d756a6066d7",
    "name": "文革动态 1967.9.3",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2d91753a-67c6-4010-b2fc-0d756a6066d7/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2d91753a-67c6-4010-b2fc-0d756a6066d7/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/2d91753a-67c6-4010-b2fc-0d756a6066d7/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革动态 1967.9.3",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 3
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
  "path": "2d91753a-67c6-4010-b2fc-0d756a6066d7",
  "resource_type": "book",
  "version": 2
}