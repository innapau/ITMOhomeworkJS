//         Задача #5

const navTabs = document.querySelectorAll('.tabs a');

for (i = 0; i < navTabs.length; i++) {
    let el = navTabs[i];
    el.addEventListener('click', changeTab, true);
}

function changeTab(element) {
    document.querySelector('.tabs li.active').classList.remove('active');
    document.querySelector('.tabs-panel.active').classList.remove('active');
    element.preventDefault();
    let clicked = element.target;
    let clickedParent = clicked.parentElement;
    clickedParent.classList.add('active');
    if (clickedParent === document.querySelector('#tab-button-1')) {
        document.querySelector('#tab-content-1').classList.add('active');
    } else if (clickedParent === document.querySelector('#tab-button-2')) {
        document.querySelector('#tab-content-2').classList.add('active');
    } else if (clickedParent === document.querySelector('#tab-button-3')) {
        document.querySelector('#tab-content-3').classList.add('active');
    } else if (clickedParent === document.querySelector('#tab-button-4')) {
        document.querySelector('#tab-content-4').classList.add('active');
    }
};
