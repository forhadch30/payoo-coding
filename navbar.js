const ulList = document.getElementById('ul-continer');
const liClick = ulList.getElementsByTagName('li');

let lastClicked = null

for (let lis of liClick) {
    lis.addEventListener('click', function () {
        if (lastClicked == null) {
            lis.style.backgroundColor = 'red'
            lis.style.color = 'white';
            lis.style.borderRadius = '5px'
            lis.style.paddingTop = '4px';
            lis.style.paddingLeft = '4px';
            lis.style.paddingBottom = '4px';
            lis.style.paddingRight = '4px';
            lastClicked = lis;
        }
        else {
            lastClicked.style.backgroundColor = 'transparent';
            lastClicked.style.color = 'black';

            lis.style.borderRadius = '5px'
            lis.style.paddingTop = '4px';
            lis.style.paddingLeft = '4px';
            lis.style.paddingBottom = '4px';
            lis.style.paddingRight = '4px';


            lis.style.backgroundColor = 'red';
            lis.style.color = 'white';
            lastClicked = lis
        }
    })
}