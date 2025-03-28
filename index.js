const btn = document.querySelector('button');

btn.addEventListener('click', function(){
     const div = document.createElement('div')
     div.innerHTML = "<p>Testing successfully completed</p>"
     document.body.appendChild(div);
})