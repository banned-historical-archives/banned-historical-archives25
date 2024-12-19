export default {
  "entity": {
    "id": "5f2c0755-0a7a-4f2a-a516-4f18b5dba427",
    "name": "红镇江报 1968.12.6",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5f2c0755-0a7a-4f2a-a516-4f18b5dba427/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5f2c0755-0a7a-4f2a-a516-4f18b5dba427/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5f2c0755-0a7a-4f2a-a516-4f18b5dba427/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5f2c0755-0a7a-4f2a-a516-4f18b5dba427/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.12.6",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 12,
            "day": 6
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
  "path": "5f2c0755-0a7a-4f2a-a516-4f18b5dba427",
  "resource_type": "book",
  "version": 2
}