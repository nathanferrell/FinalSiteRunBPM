function darkModeFunction() {
    let darkModeBtn = document.getElementById('dark-mode');
    let darkMode = localStorage.getItem('dark-mode')
  
    if(darkMode === 'active'){
        document.body.classList.add('dark-mode');
    }

    darkModeBtn.addEventListener('click', () => { 
        document.body.classList.toggle('dark-mode');

        if(document.body.classList.contains('dark-mode')){
            localStorage.setItem('dark-mode', 'active')
            
        } else {
            localStorage.setItem('dark-mode', 'inactive')
        }
    });
    
}

darkModeFunction()