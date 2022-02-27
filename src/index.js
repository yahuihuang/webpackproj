import './index.css'

const btn = document.getElementById('btn');
const num = document.getElementById('num');

btn.addEventListener('click', function() {
    const numVal = parseInt(num.innerHTML, 10);
    console.log('numVal: ' + numVal);
    num.innerHTML = numVal + 1;
})


class Test {
    #a = 1
    b = 2
}

const tt = new Test()
// TODO del
console.log('tt.a', tt.a);
console.log('tt.b', tt.b);