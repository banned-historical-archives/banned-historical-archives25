export default {
  "entity": {
    "id": "acf1b31a-d8a2-4ac7-adfe-6dea53e02533",
    "name": "红镇江报 1968.9.8",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/acf1b31a-d8a2-4ac7-adfe-6dea53e02533/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/acf1b31a-d8a2-4ac7-adfe-6dea53e02533/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/acf1b31a-d8a2-4ac7-adfe-6dea53e02533/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/acf1b31a-d8a2-4ac7-adfe-6dea53e02533/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.8",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
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
  "path": "acf1b31a-d8a2-4ac7-adfe-6dea53e02533",
  "resource_type": "book",
  "version": 2
}