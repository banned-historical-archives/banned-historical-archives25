export default {
  "entity": {
    "id": "f3d3cba1-4218-4756-892a-11ce33f5d92a",
    "name": "上海红卫战报 1969.3.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f3d3cba1-4218-4756-892a-11ce33f5d92a/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f3d3cba1-4218-4756-892a-11ce33f5d92a/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f3d3cba1-4218-4756-892a-11ce33f5d92a/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f3d3cba1-4218-4756-892a-11ce33f5d92a/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】上海红卫战报 1969.3.20",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 3,
            "day": 20
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
  "path": "f3d3cba1-4218-4756-892a-11ce33f5d92a",
  "resource_type": "book",
  "version": 2
}