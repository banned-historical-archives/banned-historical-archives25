export default {
  "entity": {
    "id": "4b428d0f-10fb-4f7e-943b-aa688e174c61",
    "name": "红镇江报 1968.9.29",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4b428d0f-10fb-4f7e-943b-aa688e174c61/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4b428d0f-10fb-4f7e-943b-aa688e174c61/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.9.29",
        "authors": [],
        "page_start": 1,
        "page_end": 2,
        "dates": [
          {
            "year": 1968,
            "month": 9,
            "day": 29
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
  "path": "4b428d0f-10fb-4f7e-943b-aa688e174c61",
  "resource_type": "book",
  "version": 2
}