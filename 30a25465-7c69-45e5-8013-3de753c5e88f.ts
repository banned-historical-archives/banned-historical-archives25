export default {
  "entity": {
    "id": "30a25465-7c69-45e5-8013-3de753c5e88f",
    "name": "红镇江报 1968.10.9",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/30a25465-7c69-45e5-8013-3de753c5e88f/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/30a25465-7c69-45e5-8013-3de753c5e88f/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/30a25465-7c69-45e5-8013-3de753c5e88f/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/30a25465-7c69-45e5-8013-3de753c5e88f/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1968.10.9",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 10,
            "day": 9
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
  "path": "30a25465-7c69-45e5-8013-3de753c5e88f",
  "resource_type": "book",
  "version": 2
}