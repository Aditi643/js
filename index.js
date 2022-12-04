// javascript
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)
let count=0
console.log(saveEl)
function increment(){
    count = count + 1
   //console.log(count)
   countEl.innerText = count
        }
 function save(){
     let countStr=count+" - "
     saveEl.textContent+= countStr
   //  console.log(count)
   countEl.textContent=0
   count=0
 }   

   
        