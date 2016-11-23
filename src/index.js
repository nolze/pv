'use strict'

var basename = require('path').basename

var md = require('markdown-it')()

var mdurl = location.hash.substr(1)

if (mdurl != "") {
  fetch(mdurl).then(function(response) {
    return response.text()
  }).then(function(text) {
    if (text == "") return
    var html = md.render(text)
    // console.log(html)
    var div = document.getElementById('main-wrapper')
    div.innerHTML = html
    document.title = (new URL(mdurl)).pathname.split('/').slice(-1)[0]
    window.MathJax.Hub.Configured()
    window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, div])
  })
}
