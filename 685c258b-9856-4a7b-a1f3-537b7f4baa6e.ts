export default {
  "entity": {
    "id": "685c258b-9856-4a7b-a1f3-537b7f4baa6e",
    "name": "红色战报 1967.4.12",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/685c258b-9856-4a7b-a1f3-537b7f4baa6e/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/685c258b-9856-4a7b-a1f3-537b7f4baa6e/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色战报 1967.4.12",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1967,
            "month": 4,
            "day": 12
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
  "path": "685c258b-9856-4a7b-a1f3-537b7f4baa6e",
  "resource_type": "book",
  "version": 2
}