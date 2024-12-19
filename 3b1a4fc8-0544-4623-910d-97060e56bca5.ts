export default {
  "entity": {
    "id": "3b1a4fc8-0544-4623-910d-97060e56bca5",
    "name": "红镇江报 1968.8.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3b1a4fc8-0544-4623-910d-97060e56bca5/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3b1a4fc8-0544-4623-910d-97060e56bca5/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/3b1a4fc8-0544-4623-910d-97060e56bca5/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.8.13",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1968,
            "month": 8,
            "day": 13
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
  "path": "3b1a4fc8-0544-4623-910d-97060e56bca5",
  "resource_type": "book",
  "version": 2
}