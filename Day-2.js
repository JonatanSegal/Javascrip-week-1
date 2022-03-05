Outer.onclick = function (event){
    event.target.style.backgroundColor = 'red';
    setTimeout(()=>{
        alert("target = " + event.target.tagName + " this id = " + this.tagName)
        event.target.style.backgroundColor = ''
    })
}