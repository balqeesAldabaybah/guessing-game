document.getElementById('login-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    localStorage.setItem('username',name)
    window.location.href = 'https://balqeesaldabaybah.github.io/guessing-game/index.html'
})