export default {
  "entity": {
    "id": "11109ceb-e806-49b4-87fd-293ab61c8e3b",
    "name": "打刘专刊 1967.8.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/11109ceb-e806-49b4-87fd-293ab61c8e3b/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/11109ceb-e806-49b4-87fd-293ab61c8e3b/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/11109ceb-e806-49b4-87fd-293ab61c8e3b/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/11109ceb-e806-49b4-87fd-293ab61c8e3b/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】打刘专刊 1967.8.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 8,
            "day": 21
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
  "path": "11109ceb-e806-49b4-87fd-293ab61c8e3b",
  "resource_type": "book",
  "version": 2
}