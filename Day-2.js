var paragraph = document.getElementById("text")
Outer.onclick = function (event){
    event.target.style.backgroundColor = 'red';
    setTimeout(()=>{
        //alert("This id = " + event.target.id + " this target = " + this.tagName)
        paragraph.innerText = "This id = " + event.target.id + " this target = " + this.tagName
        event.target.style.backgroundColor = ''
    })
}