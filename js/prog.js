let count = 0;
const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function () {
    count++;
    const income = inputArea('income');
    const software = inputArea('software');
    const courses = inputArea('courses');
    const internet = inputArea('internet');

    const totalBalance = software + courses + internet;
    const totalIncome = income - totalBalance;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalBalance.toFixed(2);

    const total = document.getElementById('balance');
    total.innerText = totalIncome.toFixed(2);


    const result = document.getElementById('results');
    result.classList.remove('hidden');


    const historyDiv = document.createElement('div');
    historyDiv.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500 '

    historyDiv.innerHTML = `
    <p class="text-2lx text-teal-800">Serial:${count}</p>
    <p class="text-xl text-teal-800">${new Date().toLocaleDateString()}
    <p class="text-xl text-teal-800">Income:$${income}</p>
    <p class="text-xl text-teal-800">Expenses:${totalBalance}</p>
    <p class="text-xl text-teal-800">Balance:${totalIncome}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyDiv, historyContainer.firstChild);
})

// add event calculate saving 
const calculateSaving = document.getElementById('calculate-savings');
calculateSaving.addEventListener('click', function () {


    const income = inputArea('income');
    const software = inputArea('software');
    const courses = inputArea('courses');
    const internet = inputArea('internet');

    const balance = software + courses + internet;
    const totalBalance = income - balance;

    const saving = parseFloat(document.getElementById('savings').value)

    const savingMoney = (saving * totalBalance) / 100;

    const remainingBalance = totalBalance - savingMoney;

    document.getElementById('savings-amount').innerText = savingMoney
    document.getElementById('remaining-balance').innerText = remainingBalance;
})


// history functionality
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    assistantTab.classList.remove(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden')
})
// assistant second tab
const assistantTabSecond = document.getElementById('assistant-tab');
assistantTab.addEventListener('click', function () {
    assistantTab.classList.add('text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    historyTab.classList.remove(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
})