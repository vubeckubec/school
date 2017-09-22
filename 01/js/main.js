console.log('Funguje to');
console.log(document.getElementById('zahlavi'));
document.getElementById('zahlavi').style.backgroundColor = 'yellow';
/*document.getElementById('nadpis').innerText = prompt('Zadej text');
document.getElementsByTagName('img')[0].width /= 2;*/
document.getElementById('nadpis').addEventListener('click',
    function(){
        this.innerText = prompt('Zadej text');
        document.getElementById('nadpis').style.color = 'red';
    })
document.getElementById("shrek").addEventListener("mouseenter",function (){
        document.getElementById("shrek").src="img/shrek2.png"
        this.style.border = "5px solid black";
        this.style.opacity = "0.5";
        this.style.width = "50%";
    });
    
document.getElementById("shrek").addEventListener("mouseleave",function (){
        document.getElementById("shrek").src="img/shrek.png";
        this.style.border = "none";
        this.style.opacity = "1";
        this.style.width = "100%";
    });
document.getElementById('menic').addEventListener('click',
    function(){
        document.getElementById('zahlavi').style.backgroundColor = 'rgb(100,100,100)';
    })          