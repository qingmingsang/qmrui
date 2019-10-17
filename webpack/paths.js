const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.resolve(root, 'dist');
const demo = path.resolve(root, 'demo', 'index.jsx');
const src = path.resolve(root, 'src', 'index.jsx');
const favicon = path.resolve(__dirname, 'favicon.ico');
const template = path.resolve(__dirname, 'template.html');

module.exports = {
  root, dist, demo, src,
  favicon, template
};