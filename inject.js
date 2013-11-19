link = document.createElement('link');
link.href = '//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css';
link.rel = 'stylesheet';
d = document.createElement('div');
d.setAttribute('class', 'container');
console.log(d);
document.getElementsByTagName('head')[0].appendChild(link);
while (document.body.firstChild)
{
  d.appendChild(document.body.firstChild);
}
document.body.appendChild(d);
