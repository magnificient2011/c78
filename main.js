var i=0;
var image=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var members=["Family book","Ashish","Ariana","Geetika"];


function Next_member() {
i++;
if(i==4){
i=0;
}
document.getElementById("family_book").src=image[i];
document.getElementById("name").innerHTML=members[i];
}
