const openSidebar = document.getElementById('button1')

openSidebar.addEventListener('click', () => {

    if (document.getElementById('sidebar').style.width == '200px') {
        document.getElementById('sidebar').style.width = '0px';

    }

    else {
        document.getElementById('sidebar').style.width = '200px'

    }

})


const closeSidebar = document.getElementById('close')

closeSidebar.addEventListener('click', () => {

    if (document.getElementById('sidebar').style.width == '0px') {
        document.getElementById('sidebar').style.width = '200px';

    }

    else {
        document.getElementById('sidebar').style.width = '0px'

    }

})