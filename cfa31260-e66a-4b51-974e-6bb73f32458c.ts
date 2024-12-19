export default {
  "entity": {
    "id": "cfa31260-e66a-4b51-974e-6bb73f32458c",
    "name": "江苏简讯 1967.7.26",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cfa31260-e66a-4b51-974e-6bb73f32458c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cfa31260-e66a-4b51-974e-6bb73f32458c/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cfa31260-e66a-4b51-974e-6bb73f32458c/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】江苏简讯 1967.7.26",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 7,
            "day": 26
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
  "path": "cfa31260-e66a-4b51-974e-6bb73f32458c",
  "resource_type": "book",
  "version": 2
}