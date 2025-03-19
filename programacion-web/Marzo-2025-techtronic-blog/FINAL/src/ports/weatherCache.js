const path = require('node:path');
const fs = require('node:fs/promises');

const DATA_FILENAME = 'weather.json';
const DATA_PATH = path.join(__dirname, 'cached_data', DATA_FILENAME);
const DATA_ENCODING = 'utf-8';

async function readFile() {
  try {
    const rawData = await fs.readFile(DATA_PATH, DATA_ENCODING);
    return JSON.parse(rawData);
  } catch (err) {
    return [];
  }
}

async function writeFile(data) {
  try {
    const rawData = JSON.stringify(data, null, 2);
    await fs.writeFile(DATA_PATH, rawData, DATA_ENCODING);
  } catch (err) {
    console.err(err);
  }
}

module.exports = {
  readFile,
  writeFile,
};
