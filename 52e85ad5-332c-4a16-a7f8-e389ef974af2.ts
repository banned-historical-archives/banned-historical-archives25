export default {
  "entity": {
    "id": "52e85ad5-332c-4a16-a7f8-e389ef974af2",
    "name": "红色风暴 1968.6.26",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52e85ad5-332c-4a16-a7f8-e389ef974af2/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52e85ad5-332c-4a16-a7f8-e389ef974af2/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52e85ad5-332c-4a16-a7f8-e389ef974af2/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52e85ad5-332c-4a16-a7f8-e389ef974af2/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.6.26",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 6,
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
  "path": "52e85ad5-332c-4a16-a7f8-e389ef974af2",
  "resource_type": "book",
  "version": 2
}