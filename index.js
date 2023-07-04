const arr=[];
let idn=0;


const form=document.getElementById("form");
form.addEventListener('submit',process);
    //console.log("inside")
 function process(event){
     event.preventDefault()
    const stuname=document.getElementById("name").value;
    const stuemail=document.getElementById("email").value;
    const stuGpa=document.getElementById("Gpa").value;
    const stuAge=document.getElementById("Age").value;
    const stuDegree=document.getElementById("Degree").value;
  
    let obj={
        ID:idn+1,
        name:stuname,
        email:stuemail,
        age:stuAge,
        gpa:stuGpa,
        degree:stuDegree
    }
    arr.push(obj);
   form.reset();
   idn++;
   console.log("adding data",idn);
    showdata();
}

function delte(event){
    let id=event.parentNode.parentNode.parentNode.id;
    //console.log(id);
    for(let i=0;i<arr.length;i++){
        if(arr[i].ID==id){
            arr.splice(i, 1);
        }
    }
    console.log("after delete",idn);
    console.log(" delete item id",id);
    console.log(arr);
    //console.log("inside showinform")
  showdata();

}

function showdata(){
    const tbody=document.getElementById("adddata");
    tbody.innerHTML="";
    for(let i=0;i<arr.length;i++){

    tbody.innerHTML+=`<tr  id="${arr[i].ID}"><td>${arr[i].ID}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].gpa}</td>
    <td class="degree"><div>${arr[i].degree}</div><div><a onclick="delte(this)"><img src="img/delte.svg"></a>
    <a onclick="update(this)"><img  src="img/update.svg"></a></div>
    </td></tr>`
} }

function update(e){
    let id=e.parentNode.parentNode.parentNode.id;
    console.log(id);
    let key=0;
    let indx=0;
    for(let i=0;i<arr.length;i++){
       if(arr[i].ID==id)
       { indx=i;}
    }
    document.getElementById("name").value=arr[indx].name;
    document.getElementById("email").value=arr[indx].email;
    document.getElementById("Gpa").value=arr[indx].gpa;
    document.getElementById("Age").value=arr[indx].age;
    document.getElementById("Degree").value=arr[indx].degree;
   
   
    form.removeEventListener('submit',process);
    let changeaddbtn=document.getElementById("submit");
       changeaddbtn.value='Edit Student';
       form.addEventListener('submit',updatedata);
     
    console.log("after adding new event listener updatedata")

 function updatedata(event){
     event.preventDefault()
    
    console.log("inside  updatedata")
     arr[indx].name=document.getElementById("name").value;
     arr[indx].email=document.getElementById("email").value;
         arr[indx].gpa=document.getElementById("Gpa").value;
         arr[indx].age=document.getElementById("Age").value;
         arr[indx].degree=document.getElementById("Degree").value;

     //  const form=document.getElementById("form");
     form.removeEventListener('submit',updatedata);
     let changeaddbtnv=document.getElementById("submit");
     changeaddbtnv.value='Add Student';
       form.addEventListener('submit',process);
       console.log("showing update data");
       form.reset();
       showdata();
    }
   

}


//search event
function search(){
    const tbody=document.getElementById("adddata");
   
    let key=document.getElementById("search").value;
   let get=0;
   if(key=="") {alert("no data found")
   return;}
   for(let i=0;i<arr.length;i++){
        if(arr[i].name==key || arr[i].email==key || arr[i].degree==key)
        { get=1;
            tbody.innerHTML="";
     tbody.innerHTML+=`<tr  id="${arr[i].ID}"><td>${arr[i].ID}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].gpa}</td>
    <td class="degree"><div>${arr[i].degree}</div><div><a onclick="delte(this)"><img src="img/delte.svg"></a>
    <a><img onclick="update(this)" src="img/update.svg"></a></div>
    </td></tr>`
        }
    }
    if(get==0){ 
        alert("No data found");
        showdata();}

      //showdata();
}