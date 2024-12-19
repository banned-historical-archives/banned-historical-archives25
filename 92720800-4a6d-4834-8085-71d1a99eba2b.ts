export default {
  "entity": {
    "id": "92720800-4a6d-4834-8085-71d1a99eba2b",
    "name": "兵团战报 1967.4.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/92720800-4a6d-4834-8085-71d1a99eba2b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/92720800-4a6d-4834-8085-71d1a99eba2b/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】兵团战报 1967.4.27",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 4,
            "day": 27
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
  "path": "92720800-4a6d-4834-8085-71d1a99eba2b",
  "resource_type": "book",
  "version": 2
}