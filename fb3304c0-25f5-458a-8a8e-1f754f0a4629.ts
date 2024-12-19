export default {
  "entity": {
    "id": "fb3304c0-25f5-458a-8a8e-1f754f0a4629",
    "name": "工地战报 1976.12.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fb3304c0-25f5-458a-8a8e-1f754f0a4629/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/fb3304c0-25f5-458a-8a8e-1f754f0a4629/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】工地战报 1976.12.17",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1976,
            "month": 12,
            "day": 17
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
  "path": "fb3304c0-25f5-458a-8a8e-1f754f0a4629",
  "resource_type": "book",
  "version": 2
}