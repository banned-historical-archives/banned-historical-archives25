export default {
  "entity": {
    "id": "c4881545-119a-4faa-ba29-93f543bf1bee",
    "name": "红镇江报 1969.3.6",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c4881545-119a-4faa-ba29-93f543bf1bee/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c4881545-119a-4faa-ba29-93f543bf1bee/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c4881545-119a-4faa-ba29-93f543bf1bee/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/c4881545-119a-4faa-ba29-93f543bf1bee/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红镇江报 1969.3.6",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1969,
            "month": 3,
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
  "path": "c4881545-119a-4faa-ba29-93f543bf1bee",
  "resource_type": "book",
  "version": 2
}