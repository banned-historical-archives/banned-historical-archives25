export default {
  "entity": {
    "id": "4ce6b171-4276-4577-a826-c1c5a8620d7d",
    "name": "江苏简讯 1967.8.11",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4ce6b171-4276-4577-a826-c1c5a8620d7d/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4ce6b171-4276-4577-a826-c1c5a8620d7d/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4ce6b171-4276-4577-a826-c1c5a8620d7d/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】江苏简讯 1967.8.11",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 11
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
  "path": "4ce6b171-4276-4577-a826-c1c5a8620d7d",
  "resource_type": "book",
  "version": 2
}