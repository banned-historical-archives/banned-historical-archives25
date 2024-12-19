export default {
  "entity": {
    "id": "4d505385-4a23-46eb-850b-ccec5fa843ad",
    "name": "文革通讯报导 1967.6.27",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4d505385-4a23-46eb-850b-ccec5fa843ad/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4d505385-4a23-46eb-850b-ccec5fa843ad/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/4d505385-4a23-46eb-850b-ccec5fa843ad/3.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "【文章待拆分】文革通讯报导 1967.6.27",
        "authors": [],
        "page_start": 1,
        "page_end": 3,
        "dates": [
          {
            "year": 1967,
            "month": 6,
            "day": 27
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
  "path": "4d505385-4a23-46eb-850b-ccec5fa843ad",
  "resource_type": "book",
  "version": 2
}