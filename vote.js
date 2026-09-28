function vote(){
    var name=document.getElementById("name").value
    var age = document.getElementById("age").value
    var ans =document.getElementById("ans")
    var panda = document.getElementById("panda").value;

    if(age>=18 && panda == "pl"){
        ans.innerHTML=name+" is eligible"
    }
    else if(age>=18 && panda != "pl"){
        ans.innerHTML=name+" You Should be from panda land "
    }
    else if(age<=18 && panda == "pl"){
        ans.innerHTML=name+" You are still a child"
    }
    else if(age<=18 && panda != "pl"){
        ans.innerHTML=name+" You are still a child and also not from panda land "
    }

}
function cal(){
    var name1=document.getElementById("name1").value
    var name2=document.getElementById("name2").value
    var per = Math.floor(Math.random()*101);
    var res = document.getElementById("res");

    res.innerHTML = "Love between "+" "+name1+" and "+name2+" "+"is"+" "+per+"%"
}


