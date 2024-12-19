export default {
  "entity": {
    "id": "411c2f42-d01b-4ac8-af6a-4f9c96d76558",
    "name": "红色风暴 1968.11.11",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/411c2f42-d01b-4ac8-af6a-4f9c96d76558/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/411c2f42-d01b-4ac8-af6a-4f9c96d76558/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/411c2f42-d01b-4ac8-af6a-4f9c96d76558/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/411c2f42-d01b-4ac8-af6a-4f9c96d76558/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.11.11",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 11,
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
  "path": "411c2f42-d01b-4ac8-af6a-4f9c96d76558",
  "resource_type": "book",
  "version": 2
}