export default {
  "entity": {
    "id": "cb01239c-02ef-40b2-9a9e-3668a7260218",
    "name": "文艺 1968.1.24",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb01239c-02ef-40b2-9a9e-3668a7260218/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb01239c-02ef-40b2-9a9e-3668a7260218/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb01239c-02ef-40b2-9a9e-3668a7260218/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/cb01239c-02ef-40b2-9a9e-3668a7260218/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文艺 1968.1.24",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 1,
            "day": 24
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
  "path": "cb01239c-02ef-40b2-9a9e-3668a7260218",
  "resource_type": "book",
  "version": 2
}