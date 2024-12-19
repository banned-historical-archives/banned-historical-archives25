export default {
  "entity": {
    "id": "be150a68-522b-4d10-9a27-5e210fd103a7",
    "name": "红镇江报 1968.10.28",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/be150a68-522b-4d10-9a27-5e210fd103a7/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/be150a68-522b-4d10-9a27-5e210fd103a7/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.28",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 28
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
  "path": "be150a68-522b-4d10-9a27-5e210fd103a7",
  "resource_type": "book",
  "version": 2
}