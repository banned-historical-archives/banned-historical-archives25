export default {
  "entity": {
    "id": "93f5dbdf-a2f2-42ac-8943-a227199627ad",
    "name": "红色风暴 1968.4.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/93f5dbdf-a2f2-42ac-8943-a227199627ad/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/93f5dbdf-a2f2-42ac-8943-a227199627ad/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/93f5dbdf-a2f2-42ac-8943-a227199627ad/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/93f5dbdf-a2f2-42ac-8943-a227199627ad/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.4.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 4,
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
  "path": "93f5dbdf-a2f2-42ac-8943-a227199627ad",
  "resource_type": "book",
  "version": 2
}