export default {
  "entity": {
    "id": "8eb73e09-fd3d-4506-8457-c132c715a545",
    "name": "红色风暴 1969.1.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8eb73e09-fd3d-4506-8457-c132c715a545/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8eb73e09-fd3d-4506-8457-c132c715a545/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8eb73e09-fd3d-4506-8457-c132c715a545/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/8eb73e09-fd3d-4506-8457-c132c715a545/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1969.1.13",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 1,
            "day": 13
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
  "path": "8eb73e09-fd3d-4506-8457-c132c715a545",
  "resource_type": "book",
  "version": 2
}