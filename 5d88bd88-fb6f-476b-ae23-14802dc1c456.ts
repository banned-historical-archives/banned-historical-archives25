export default {
  "entity": {
    "id": "5d88bd88-fb6f-476b-ae23-14802dc1c456",
    "name": "红色风暴 1968.7.7",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5d88bd88-fb6f-476b-ae23-14802dc1c456/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5d88bd88-fb6f-476b-ae23-14802dc1c456/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5d88bd88-fb6f-476b-ae23-14802dc1c456/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5d88bd88-fb6f-476b-ae23-14802dc1c456/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.7.7",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 7,
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
  "path": "5d88bd88-fb6f-476b-ae23-14802dc1c456",
  "resource_type": "book",
  "version": 2
}