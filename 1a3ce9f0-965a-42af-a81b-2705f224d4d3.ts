export default {
  "entity": {
    "id": "1a3ce9f0-965a-42af-a81b-2705f224d4d3",
    "name": "戏剧战报 1967.6.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1a3ce9f0-965a-42af-a81b-2705f224d4d3/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/1a3ce9f0-965a-42af-a81b-2705f224d4d3/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】戏剧战报 1967.6.7",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 6,
            "day": 7
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
  "path": "1a3ce9f0-965a-42af-a81b-2705f224d4d3",
  "resource_type": "book",
  "version": 2
}