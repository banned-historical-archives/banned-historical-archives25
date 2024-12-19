export default {
  "entity": {
    "id": "be73fcbd-4b2a-4782-be35-52b1ff342be1",
    "name": "红卫报 1966.12.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/be73fcbd-4b2a-4782-be35-52b1ff342be1/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/be73fcbd-4b2a-4782-be35-52b1ff342be1/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红卫报 1966.12.9",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1966,
            "month": 12,
            "day": 9
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
  "path": "be73fcbd-4b2a-4782-be35-52b1ff342be1",
  "resource_type": "book",
  "version": 2
}