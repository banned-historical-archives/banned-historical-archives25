export default {
  "entity": {
    "id": "c812760a-1e1d-4af3-af59-83ff1a1945a1",
    "name": "大会专刊 1967.6.10",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c812760a-1e1d-4af3-af59-83ff1a1945a1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c812760a-1e1d-4af3-af59-83ff1a1945a1/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c812760a-1e1d-4af3-af59-83ff1a1945a1/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c812760a-1e1d-4af3-af59-83ff1a1945a1/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大会专刊 1967.6.10",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 6,
            "day": 10
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
  "path": "c812760a-1e1d-4af3-af59-83ff1a1945a1",
  "resource_type": "book",
  "version": 2
}