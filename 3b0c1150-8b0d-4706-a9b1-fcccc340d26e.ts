export default {
  "entity": {
    "id": "3b0c1150-8b0d-4706-a9b1-fcccc340d26e",
    "name": "红色风暴 1969.1.30",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3b0c1150-8b0d-4706-a9b1-fcccc340d26e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3b0c1150-8b0d-4706-a9b1-fcccc340d26e/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3b0c1150-8b0d-4706-a9b1-fcccc340d26e/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.30",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 30
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
  "path": "3b0c1150-8b0d-4706-a9b1-fcccc340d26e",
  "resource_type": "book",
  "version": 2
}