export default {
  "entity": {
    "id": "e0546cb3-dd8d-47ca-8e5b-a096230cc153",
    "name": "红镇江报 1968.9.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e0546cb3-dd8d-47ca-8e5b-a096230cc153/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e0546cb3-dd8d-47ca-8e5b-a096230cc153/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e0546cb3-dd8d-47ca-8e5b-a096230cc153/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e0546cb3-dd8d-47ca-8e5b-a096230cc153/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 21
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
  "path": "e0546cb3-dd8d-47ca-8e5b-a096230cc153",
  "resource_type": "book",
  "version": 2
}