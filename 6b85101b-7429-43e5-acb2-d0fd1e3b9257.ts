export default {
  "entity": {
    "id": "6b85101b-7429-43e5-acb2-d0fd1e3b9257",
    "name": "红色风暴 1968.8.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6b85101b-7429-43e5-acb2-d0fd1e3b9257/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6b85101b-7429-43e5-acb2-d0fd1e3b9257/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6b85101b-7429-43e5-acb2-d0fd1e3b9257/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/6b85101b-7429-43e5-acb2-d0fd1e3b9257/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.8.14",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 14
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
  "path": "6b85101b-7429-43e5-acb2-d0fd1e3b9257",
  "resource_type": "book",
  "version": 2
}