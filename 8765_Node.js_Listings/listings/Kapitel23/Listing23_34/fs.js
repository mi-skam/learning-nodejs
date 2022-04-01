const fs = jest.createMockFromModule('fs');

let fileContent = '';
fs.__setFileContent = (content) => {
  fileContent = content;
}
fs.readFile = (name, encoding, cb) {
  cb(null, fileContent);
}

module.exports = fs;