console.log('hello');
let sub=document.getElementById("send");
sub.addEventListener('click',()=>{
    let sect=document.getElementById('todo').value;


    var table =document.getElementById('table');
    newRow=table.insertRow(table.lenght);

    cell1=newRow.insertCell(0);
    cell2=newRow.insertCell(1);

    cell1.innerHTML=sect;
    cell2.innerHTML= `<button onclick="myfunction()">Delete</button>`;
})


function myfunction(){
    document.getElementById('table').deleteRow(1);
    

}