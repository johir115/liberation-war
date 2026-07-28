// show date and time
function showdatetime(){
    let today = new Date();
    document.getElementById("showdatetime").textContent = today.toLocaleString();
    console.log(today);
    return true;
}
showdatetime()


// code for form validaiton
function validationjohir (){

    let NameDoc=document.getElementById("name").value;
    let EmailDoc=document.getElementById("email").value;
    let SubjectDoc=document.getElementById("subject").value;
    let TextDoc=document.getElementById("text").value;
    let FileDoc=document.getElementById("file").value;

    console.log(NameDoc);
    console.log(EmailDoc);
    console.log(SubjectDoc);
    console.log(TextDoc);
    console.log(FileDoc);

    if(NameDoc == "" || EmailDoc == "" || SubjectDoc == "" || TextDoc == "" || FileDoc == ""){
        alert('please fill empty field')
        return false;
    }
    alert('sumit done!');
    return true;
}