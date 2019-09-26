
// var d3 = require('d3');
// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
//
// var $ = jQuery = require('jquery')(window);
//
// var $ = jQuery = require('jquery')(window);
// $("body").append("<div id = pedigrees></div>");


const { JSDOM } = require('jsdom');

const options = {
      resources: 'usable',
      runScripts: 'dangerously',
      pretendToBeVisual: true,
};

JSDOM.fromFile('example1.html', options).then((dom) => {
    const { document } = dom.window;
    // var root = document.querySelector("body");
    // console.log(root.innerHTML);
    // console.log(dom.window.querySelector("p"))

    // console.log(document.getElementById("#pedigrees").innerHTML);
});
