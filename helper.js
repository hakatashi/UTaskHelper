var smt = document.getElementById('smt');

// remove existing submit link
Array.prototype.forEach.call(smt.children, function(element) {
	smt.removeChild(element);
});

// make new submit link
var submit = document.createElement('input');
submit.setAttribute('type', 'image');
submit.setAttribute('src', '/images/common/f_8.gif');
submit.setAttribute('alt', 'ログイン');
submit.setAttribute('width', 137);
submit.setAttribute('height', 25);

// append new submit link
smt.appendChild(submit);
