
const style = document.createElement('style');
style.setAttribute('id', './eagerly-slider.css');
style.appendChild(document.createTextNode("@keyframes animateInLeft {\n\t0% {\n\t\ttransform: translateX(-100%);\n\t}\n\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n\n@keyframes animateInRight {\n\t0% {\n\t\ttransform: translateX(100%);\n\t}\n\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n"));
document.head.appendChild(style);