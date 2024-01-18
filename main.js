
const grigliaHtml=document.getElementById("griglia");
// const griglia2Html=document.getElementById("griglia2");
// const griglia3Html=document.getElementById("griglia3");

const difficoltaHtml=document.getElementById("grado");
const enterveHtml=document.getElementById("enter");


enterveHtml.addEventListener("click",function(){
   grigliaHtml.innerHTML=""

   if(difficoltaHtml.value==="cento"){
          for(let i = 1; i <= 100;i ++){
               let box = document.createElement("div") 
                  box.classList.add("box")
                    
                   box.innerText=i
                
                  grigliaHtml.append(box)
             }
   }else if (difficoltaHtml.value==="ottantuno"){
      
      for(let i = 1; i <=  81;i ++){
          let box = document.createElement("div")
          box.classList.add("box2")
          
            box.innerText=i
          
            grigliaHtml.append(box)
      }
   } else if (difficoltaHtml.value==="quarantanove")

            for(let i = 1; i <= 49;i ++){
                let box = document.createElement("div") 
                box.classList.add("box3")
              
             box.innerText=i
              
            grigliaHtml.append(box)
      }
})
     








