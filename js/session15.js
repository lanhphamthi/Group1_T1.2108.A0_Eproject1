function showInfo()
{
    //khi dung getElementById() tra ve 1 bien kieu string
    var name = document.getElementById("username").value;
    
    //khi dung getElementsByClassName() tra ve 1 bien kieu array
    var pw = document.getElementsByClassName("pass")[0].value;

    //email 
    var mail = document.getElementsByName("email")[0].value;

    //birthday
    var birth = document.getElementById("birthday").value;

    //tao 1 doi tuong kieu Date
    var bday = new Date(birth);
    var today = new Date(); //lay ngay hien tai
    var age = today.getFullYear() - bday.getFullYear();
    alert("Name: " + name + " Pass: " + pw + " Mail: " + mail + " Birthday: " + birth + " Age: " + age);
}
