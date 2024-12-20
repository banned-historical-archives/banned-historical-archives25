export default {
  "entity": {
    "id": "b1394e85-1441-4b6a-9ca4-dbfe4f1af480",
    "name": "大批判 1968.3.25",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b1394e85-1441-4b6a-9ca4-dbfe4f1af480/1.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b1394e85-1441-4b6a-9ca4-dbfe4f1af480/2.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b1394e85-1441-4b6a-9ca4-dbfe4f1af480/3.png",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/b1394e85-1441-4b6a-9ca4-dbfe4f1af480/4.png"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】大批判 1968.3.25",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 3,
            "day": 25
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
  "path": "b1394e85-1441-4b6a-9ca4-dbfe4f1af480",
  "resource_type": "book",
  "version": 2
}