export default {
  "entity": {
    "id": "086bbbe2-cfd7-48cd-be69-4c9915b5d37b",
    "name": "红色风暴 1968.8.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/086bbbe2-cfd7-48cd-be69-4c9915b5d37b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/086bbbe2-cfd7-48cd-be69-4c9915b5d37b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/086bbbe2-cfd7-48cd-be69-4c9915b5d37b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/086bbbe2-cfd7-48cd-be69-4c9915b5d37b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.8.8",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 8
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
  "path": "086bbbe2-cfd7-48cd-be69-4c9915b5d37b",
  "resource_type": "book",
  "version": 2
}