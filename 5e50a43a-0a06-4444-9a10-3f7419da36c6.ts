export default {
  "entity": {
    "id": "5e50a43a-0a06-4444-9a10-3f7419da36c6",
    "name": "宜宾专刊 1967.7.17",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5e50a43a-0a06-4444-9a10-3f7419da36c6/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5e50a43a-0a06-4444-9a10-3f7419da36c6/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5e50a43a-0a06-4444-9a10-3f7419da36c6/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/5e50a43a-0a06-4444-9a10-3f7419da36c6/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】宜宾专刊 1967.7.17",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
            "month": 7,
            "day": 17
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
  "path": "5e50a43a-0a06-4444-9a10-3f7419da36c6",
  "resource_type": "book",
  "version": 2
}