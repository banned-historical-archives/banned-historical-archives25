export default {
  "entity": {
    "id": "ea4873b0-a7c9-4cc8-9217-fda8722469fe",
    "name": "红镇江报 1968.10.29",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea4873b0-a7c9-4cc8-9217-fda8722469fe/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea4873b0-a7c9-4cc8-9217-fda8722469fe/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea4873b0-a7c9-4cc8-9217-fda8722469fe/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ea4873b0-a7c9-4cc8-9217-fda8722469fe/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.29",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 29
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
  "path": "ea4873b0-a7c9-4cc8-9217-fda8722469fe",
  "resource_type": "book",
  "version": 2
}