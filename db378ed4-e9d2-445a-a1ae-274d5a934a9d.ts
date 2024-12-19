export default {
  "entity": {
    "id": "db378ed4-e9d2-445a-a1ae-274d5a934a9d",
    "name": "红色风暴 1968.12.3",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db378ed4-e9d2-445a-a1ae-274d5a934a9d/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db378ed4-e9d2-445a-a1ae-274d5a934a9d/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db378ed4-e9d2-445a-a1ae-274d5a934a9d/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/db378ed4-e9d2-445a-a1ae-274d5a934a9d/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.12.3",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 12,
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
  "path": "db378ed4-e9d2-445a-a1ae-274d5a934a9d",
  "resource_type": "book",
  "version": 2
}