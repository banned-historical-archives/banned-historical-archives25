export default {
  "entity": {
    "id": "7a815e63-8e98-4fcd-80db-aca4a905ded8",
    "name": "红旗 1967.9.15",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7a815e63-8e98-4fcd-80db-aca4a905ded8/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7a815e63-8e98-4fcd-80db-aca4a905ded8/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/7a815e63-8e98-4fcd-80db-aca4a905ded8/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红旗 1967.9.15",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 15
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
  "path": "7a815e63-8e98-4fcd-80db-aca4a905ded8",
  "resource_type": "book",
  "version": 2
}