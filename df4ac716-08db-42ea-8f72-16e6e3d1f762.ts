export default {
  "entity": {
    "id": "df4ac716-08db-42ea-8f72-16e6e3d1f762",
    "name": "红色风暴 1968.9.23",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/df4ac716-08db-42ea-8f72-16e6e3d1f762/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/df4ac716-08db-42ea-8f72-16e6e3d1f762/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/df4ac716-08db-42ea-8f72-16e6e3d1f762/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/df4ac716-08db-42ea-8f72-16e6e3d1f762/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.9.23",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 23
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
  "path": "df4ac716-08db-42ea-8f72-16e6e3d1f762",
  "resource_type": "book",
  "version": 2
}