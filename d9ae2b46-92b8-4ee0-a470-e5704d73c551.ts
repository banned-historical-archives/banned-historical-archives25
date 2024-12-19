export default {
  "entity": {
    "id": "d9ae2b46-92b8-4ee0-a470-e5704d73c551",
    "name": "大会专刊 1967.6.4",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d9ae2b46-92b8-4ee0-a470-e5704d73c551/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d9ae2b46-92b8-4ee0-a470-e5704d73c551/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d9ae2b46-92b8-4ee0-a470-e5704d73c551/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d9ae2b46-92b8-4ee0-a470-e5704d73c551/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1967.6.4",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 6,
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
  "path": "d9ae2b46-92b8-4ee0-a470-e5704d73c551",
  "resource_type": "book",
  "version": 2
}