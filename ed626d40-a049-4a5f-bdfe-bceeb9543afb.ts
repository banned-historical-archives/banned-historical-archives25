export default {
  "entity": {
    "id": "ed626d40-a049-4a5f-bdfe-bceeb9543afb",
    "name": "东方红 1968.1.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ed626d40-a049-4a5f-bdfe-bceeb9543afb/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ed626d40-a049-4a5f-bdfe-bceeb9543afb/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】东方红 1968.1.9",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1968,
            "month": 1,
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
  "path": "ed626d40-a049-4a5f-bdfe-bceeb9543afb",
  "resource_type": "book",
  "version": 2
}