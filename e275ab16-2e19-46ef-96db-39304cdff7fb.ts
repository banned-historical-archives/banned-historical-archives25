export default {
  "entity": {
    "id": "e275ab16-2e19-46ef-96db-39304cdff7fb",
    "name": "江苏简讯 1967.9.6",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e275ab16-2e19-46ef-96db-39304cdff7fb/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e275ab16-2e19-46ef-96db-39304cdff7fb/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/e275ab16-2e19-46ef-96db-39304cdff7fb/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】江苏简讯 1967.9.6",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 9,
            "day": 6
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
  "path": "e275ab16-2e19-46ef-96db-39304cdff7fb",
  "resource_type": "book",
  "version": 2
}