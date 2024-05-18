var defaults = {
    html: false, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />)
    breaks: false, // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-', // CSS language prefix for fenced blocks
    linkify: true, // autoconvert URL-like texts to links
    typographer: true, // Enable smartypants and other sweet transforms
    // options below are for demo only
    _highlight: true, // <= THIS IS WHAT YOU NEED
    _strict: false,
    _view: 'html' // html / src / debug
};

// and then do this:

defaults.highlight = function (str, lang) {
    var esc = md.utils.escapeHtml;
    console.log(str)
    console.log(lang)
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }else{
      return '<pre class="hljs"><code>' + esc(str) + '</code></pre>';
    }

};


const md = window.markdownit(defaults); // markdown-it
md.use(window.markdownitLatex2img, {style: "transform:scale(1.5);text-align:center;filter:invert(100%)"}); // 串接latex