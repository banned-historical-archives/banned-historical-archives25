export default {
  "entity": {
    "id": "52b57ed5-7189-4f83-b7e5-b989fa2824a8",
    "name": "红色风暴 1968.7.13",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52b57ed5-7189-4f83-b7e5-b989fa2824a8/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52b57ed5-7189-4f83-b7e5-b989fa2824a8/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52b57ed5-7189-4f83-b7e5-b989fa2824a8/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/52b57ed5-7189-4f83-b7e5-b989fa2824a8/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红色风暴 1968.7.13",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1968,
            "month": 7,
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
  "path": "52b57ed5-7189-4f83-b7e5-b989fa2824a8",
  "resource_type": "book",
  "version": 2
}