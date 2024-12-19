export default {
  "entity": {
    "id": "57e168ba-4840-489b-85e2-dd9ac7b852a2",
    "name": "首都红卫兵 1967.4.2",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/57e168ba-4840-489b-85e2-dd9ac7b852a2/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/57e168ba-4840-489b-85e2-dd9ac7b852a2/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/57e168ba-4840-489b-85e2-dd9ac7b852a2/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/57e168ba-4840-489b-85e2-dd9ac7b852a2/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】首都红卫兵 1967.4.2",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 4,
            "day": 2
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
  "path": "57e168ba-4840-489b-85e2-dd9ac7b852a2",
  "resource_type": "book",
  "version": 2
}