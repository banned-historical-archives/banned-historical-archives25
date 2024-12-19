export default {
  "entity": {
    "id": "053c0daa-a091-47a0-af96-c8b8b51150d8",
    "name": "红色风暴 1968.9.29",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/053c0daa-a091-47a0-af96-c8b8b51150d8/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/053c0daa-a091-47a0-af96-c8b8b51150d8/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/053c0daa-a091-47a0-af96-c8b8b51150d8/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/053c0daa-a091-47a0-af96-c8b8b51150d8/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.9.29",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 29
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
  "path": "053c0daa-a091-47a0-af96-c8b8b51150d8",
  "resource_type": "book",
  "version": 2
}