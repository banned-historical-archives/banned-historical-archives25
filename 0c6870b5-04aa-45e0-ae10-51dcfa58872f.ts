export default {
  "entity": {
    "id": "0c6870b5-04aa-45e0-ae10-51dcfa58872f",
    "name": "红色风暴 1969.1.23",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0c6870b5-04aa-45e0-ae10-51dcfa58872f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0c6870b5-04aa-45e0-ae10-51dcfa58872f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0c6870b5-04aa-45e0-ae10-51dcfa58872f/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/0c6870b5-04aa-45e0-ae10-51dcfa58872f/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.23",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 23
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
  "path": "0c6870b5-04aa-45e0-ae10-51dcfa58872f",
  "resource_type": "book",
  "version": 2
}