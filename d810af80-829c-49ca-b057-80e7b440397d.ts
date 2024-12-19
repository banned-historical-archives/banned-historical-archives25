export default {
  "entity": {
    "id": "d810af80-829c-49ca-b057-80e7b440397d",
    "name": "红色风暴 1968.6.14",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d810af80-829c-49ca-b057-80e7b440397d/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d810af80-829c-49ca-b057-80e7b440397d/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d810af80-829c-49ca-b057-80e7b440397d/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/d810af80-829c-49ca-b057-80e7b440397d/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.6.14",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 6,
            "day": 14
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
  "path": "d810af80-829c-49ca-b057-80e7b440397d",
  "resource_type": "book",
  "version": 2
}