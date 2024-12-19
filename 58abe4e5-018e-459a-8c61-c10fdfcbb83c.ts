export default {
  "entity": {
    "id": "58abe4e5-018e-459a-8c61-c10fdfcbb83c",
    "name": "红色风暴 1969.3.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/58abe4e5-018e-459a-8c61-c10fdfcbb83c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/58abe4e5-018e-459a-8c61-c10fdfcbb83c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/58abe4e5-018e-459a-8c61-c10fdfcbb83c/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/58abe4e5-018e-459a-8c61-c10fdfcbb83c/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.3.20",
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
  "path": "58abe4e5-018e-459a-8c61-c10fdfcbb83c",
  "resource_type": "book",
  "version": 2
}