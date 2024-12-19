export default {
  "entity": {
    "id": "75b5d5a0-dded-4ab9-bb93-d9de000b83bd",
    "name": "红色风暴 1968.9.21",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/75b5d5a0-dded-4ab9-bb93-d9de000b83bd/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/75b5d5a0-dded-4ab9-bb93-d9de000b83bd/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/75b5d5a0-dded-4ab9-bb93-d9de000b83bd/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/75b5d5a0-dded-4ab9-bb93-d9de000b83bd/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.9.21",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 9,
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
  "path": "75b5d5a0-dded-4ab9-bb93-d9de000b83bd",
  "resource_type": "book",
  "version": 2
}