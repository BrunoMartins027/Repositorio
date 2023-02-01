let container = document.querySelector('div')
let input = document.querySelector('#Password')
let icon = document.querySelector('img')

icon.addEventListener('click' , function() {
container.classList.toggle('visible');
    if (container.classList.contains('visible')){
        icon.src = './OPENEYE.svg ';
        input.type = 'text';
    }
    else{
        icon.src = './CLOSEDEYE.svg';
        input.type = 'password';
    }
});


function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
}
console.log(validateEmail('texto@texto.com')); // true
console.log(validateEmail('texto.com')); // false
console.log(validateEmail('texto@texto')); // false
console.log(validateEmail('texto')); // false