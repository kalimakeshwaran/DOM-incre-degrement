let button=document.getElementById("btn");
button.addEventListener("click",myFunction)
let button1=document.getElementById("btns");
button1.addEventListener("click",myFunctions)

            function myFunction(){
            let a=document.getElementById("text").value;
            a++;
            document.getElementById("text").value=a;
            }

            function myFunctions(){
                let b=document.getElementById("text").value;
                b--;
                document.getElementById("text").value=b;
            }

            