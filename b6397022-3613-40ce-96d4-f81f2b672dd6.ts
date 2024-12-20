export default {
  "entity": {
    "id": "b6397022-3613-40ce-96d4-f81f2b672dd6",
    "name": "戏剧战报 1967.5.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b6397022-3613-40ce-96d4-f81f2b672dd6/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b6397022-3613-40ce-96d4-f81f2b672dd6/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】戏剧战报 1967.5.21",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 5,
            "day": 21
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
  "path": "b6397022-3613-40ce-96d4-f81f2b672dd6",
  "resource_type": "book",
  "version": 2
}