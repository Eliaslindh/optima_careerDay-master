const openSidebar = document.getElementById('button1')

openSidebar.addEventListener('click', () => {
    console.log('gmr')
    if (document.getElementById('sidebar').style.width == '200px') {
        document.getElementById('sidebar').style.width = '0px';

    }

    else {
        document.getElementById('sidebar').style.width = '200px'

    }

})