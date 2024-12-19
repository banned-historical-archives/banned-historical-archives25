export default {
  "entity": {
    "id": "c7b1af69-0c30-4cf2-b084-79b0dc37dfae",
    "name": "红色风暴 1968.10.30",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c7b1af69-0c30-4cf2-b084-79b0dc37dfae/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c7b1af69-0c30-4cf2-b084-79b0dc37dfae/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c7b1af69-0c30-4cf2-b084-79b0dc37dfae/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c7b1af69-0c30-4cf2-b084-79b0dc37dfae/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.10.30",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
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
  "path": "c7b1af69-0c30-4cf2-b084-79b0dc37dfae",
  "resource_type": "book",
  "version": 2
}