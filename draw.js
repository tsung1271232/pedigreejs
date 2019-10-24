process.chdir(__dirname);
const { JSDOM } = require('jsdom');

const options = {
      resources: 'usable',
      runScripts: 'dangerously',
      pretendToBeVisual: true,
};

JSDOM.fromFile('example1.html', options).then((dom) => {
    const { document } = dom.window;
    var root = document.querySelector("body");
});
