export default {
  "entity": {
    "id": "f4a810ed-c69d-420a-97d9-4155397607d4",
    "name": "红卫战报 1966.12.6",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f4a810ed-c69d-420a-97d9-4155397607d4/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f4a810ed-c69d-420a-97d9-4155397607d4/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f4a810ed-c69d-420a-97d9-4155397607d4/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/f4a810ed-c69d-420a-97d9-4155397607d4/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫战报 1966.12.6",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1966,
            "month": 12,
            "day": 6
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
  "path": "f4a810ed-c69d-420a-97d9-4155397607d4",
  "resource_type": "book",
  "version": 2
}