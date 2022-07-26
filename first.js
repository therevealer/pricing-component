
function checkBoxer(){
    const checkbox = document.getElementById('checkbox');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');

    if(checkbox.value == 'annual'){
        one.innerText = 19.99;
        two.innerText = 24.99;
        three.innerText = 39.99;
        checkbox.value = 'month';
    }else{
        one.innerText = 199.99;
        two.innerText = 299.99;
        three.innerText = 399.99;
        checkbox.value = 'annual';
    }
}