export default {
  "entity": {
    "id": "d733c663-3b28-4d7a-a99d-99ccc7ab970f",
    "name": "挺进快报 1967.2.4 特",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d733c663-3b28-4d7a-a99d-99ccc7ab970f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d733c663-3b28-4d7a-a99d-99ccc7ab970f/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】挺进快报 1967.2.4 特",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 4
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
  "path": "d733c663-3b28-4d7a-a99d-99ccc7ab970f",
  "resource_type": "book",
  "version": 2
}