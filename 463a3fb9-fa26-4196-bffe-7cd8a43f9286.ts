export default {
  "entity": {
    "id": "463a3fb9-fa26-4196-bffe-7cd8a43f9286",
    "name": "红旗 1967.1.24",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/463a3fb9-fa26-4196-bffe-7cd8a43f9286/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/463a3fb9-fa26-4196-bffe-7cd8a43f9286/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/463a3fb9-fa26-4196-bffe-7cd8a43f9286/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/463a3fb9-fa26-4196-bffe-7cd8a43f9286/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】红旗 1967.1.24",
        "authors": [],
        "page_start": 1,
        "page_end": 4,
        "dates": [
          {
            "year": 1967,
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
  "path": "463a3fb9-fa26-4196-bffe-7cd8a43f9286",
  "resource_type": "book",
  "version": 2
}