// const ulList = document.getElementById('ul-continer');
// const liClick = ulList.getElementsByTagName('li');

// let lastClicked = null

// for (let lis of liClick) {
//     lis.addEventListener('click', function () {
//         if (lastClicked == null) {
//             lis.style.backgroundColor = 'red'
//             lis.style.color = 'white';
//             lis.style.borderRadius = '5px'
//             lis.style.paddingTop = '4px';
//             lis.style.paddingLeft = '4px';
//             lis.style.paddingBottom = '4px';
//             lis.style.paddingRight = '4px';
//             lastClicked = lis;
//         }
//         else {
//             lastClicked.style.backgroundColor = 'transparent';
//             lastClicked.style.color = 'black';

//             lis.style.borderRadius = '5px'
//             lis.style.paddingTop = '4px';
//             lis.style.paddingLeft = '4px';
//             lis.style.paddingBottom = '4px';
//             lis.style.paddingRight = '4px';


//             lis.style.backgroundColor = 'red';
//             lis.style.color = 'white';
//             lastClicked = lis
//         }
//     })
// }





const ulListItems = document.getElementById('ul-container');
const liList = ulListItems.getElementsByTagName('li');

let fistLiList = null

for (let listContainer of liList) {
    listContainer.addEventListener('click', function () {
        if (fistLiList === null) {
            listContainer.style.backgroundColor = 'red';
            listContainer.style.color = 'white';

            listContainer.style.borderRadius = '5px'
            listContainer.style.paddingTop = '4px';
            listContainer.style.paddingLeft = '4px';
            listContainer.style.paddingBottom = '4px';
            listContainer.style.paddingRight = '4px';

            fistLiList = listContainer;
        }
        else {
            fistLiList.style.backgroundColor = 'transparent';
            fistLiList.style.color = 'black'


            listContainer.style.borderRadius = '5px'
            listContainer.style.paddingTop = '4px';
            listContainer.style.paddingLeft = '4px';
            listContainer.style.paddingBottom = '4px';
            listContainer.style.paddingRight = '4px';


            listContainer.style.backgroundColor = 'red';
            listContainer.style.color = 'white';
            fistLiList = listContainer;
        }

    })
}