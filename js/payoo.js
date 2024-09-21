document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const numbers = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;
    if (numbers === '5' && pin === '1234') {
        console.log('great job');   
        window.location.href = '/home.html'
    }
    else{
        alert('unknown email')
    }
})