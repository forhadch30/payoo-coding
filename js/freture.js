document.getElementById('cash-out-Btn').addEventListener('click', function () {
    document.getElementById('cash-out-from').classList.remove('hidden');
    console.log('show all the form');

    document.getElementById('add-money-hide').classList.add('hidden')
})


document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('add-money-hide').classList.remove('hidden');

    document.getElementById('cash-out-from').classList.add('hidden')
})