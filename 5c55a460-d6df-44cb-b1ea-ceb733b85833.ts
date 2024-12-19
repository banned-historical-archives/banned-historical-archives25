export default {
  "entity": {
    "id": "5c55a460-d6df-44cb-b1ea-ceb733b85833",
    "name": "会刊 1970.8.3",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5c55a460-d6df-44cb-b1ea-ceb733b85833/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5c55a460-d6df-44cb-b1ea-ceb733b85833/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5c55a460-d6df-44cb-b1ea-ceb733b85833/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5c55a460-d6df-44cb-b1ea-ceb733b85833/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】会刊 1970.8.3",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1970,
            "month": 8,
            "day": 3
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
  "path": "5c55a460-d6df-44cb-b1ea-ceb733b85833",
  "resource_type": "book",
  "version": 2
}