function divide(){
    const numbA = document.getElementById("numb-a").value;
    const numbB = document.getElementById("numb-b").value;
    const result = document.getElementById("ketqua")
    result.innerHTML = (numbB/numbA)*-1;

}

function bai2(){
    const name = document.getElementById("bai2-ten").value;
    const phone = document.getElementById("bai2-sdt").value;
    const email = document.getElementById("bai2-email").value;
    const option = document.getElementById("bai2-option");
    const optionText = option.options[option.selectedIndex].text;
    const mathe = document.getElementById("bai2-mathe").value;   
    const invoiceid = document.getElementById("bai2-invoiceid").value;
    const textarea = document.getElementById("input-description").value;
    window.alert("Họ và tên" +name +"\n Mã thẻ:" + mathe +"\n Số điện thoại:"+ phone +"Email:" +email +"\n 123"+"\n Loại KH" +optionText +"\n Nội dung góp ý "+ textarea
    );

}

function bai3(){
const hoten = document.getElementById("bai3-ten").value;
const email = document.getElementById("bai3-email").value;
const title = document.getElementById("bai3-title").value;
const textarea = document.getElementById("bai3-input-description").value;

const confirmBox = confirm(
    "Họ và tên" +hoten +"Email:" +email  +"\n Nội dung góp ý "+ textarea
);
}
function bai4(){
    const health = [
        {
             loai: '0',
             message: 'Khám định kì '
         },
         {
             loai: '1',
             message: 'Tập thể dục thường xuyên '
         },
         {
             loai: '2',
             message: 'Hạn chế ăn mỡ dùm cái '
         }
     ]
     const weight = parseFloat(document.getElementById("weight").value);
     const height = parseFloat(document.getElementById("height").value);
     const bai4Select = document.getElementById("bai4-select");
     const bai4Option =  bai4Select.options[bai4Select.selectedIndex].value;
     const BMI = weight/(height*height)
     for(let i =0 ; i< health.length ; i++){
        const loaiVar = health[i].loai
        if(bai4Option===loaiVar){
            console.log(health[i].message)
          document.getElementById("message").innerHTML = health[i].message
        }
       }
    document.getElementById("bai4-number").innerHTML = BMI
    const categories = document.getElementById("categories")
    if(BMI<18.5){
    categories.innerHTML = "dưới chuẩn"
    }else if(BMI > 18.5 && BMI <24.9){
        categories.innerHTML = "Bth"
    }else if(BMI>25 && BMI<29.9){
        categories.innerHTML = "thừa cân qué"
    }else if(BMI>30 && BMI<34.9){
        categories.innerHTML = "béo phì cấp 1"
    }else if(BMI>35 && BMI<39.9){
        categories.innerHTML = "béo phì cấp 2"
    }else{
        categories.innerHTML = "béo phì cấp 3"
    }
     
 
}
   


function bai5(){
    const tentk = document.getElementById("bai5-name");
    var passWord = document.getElementById("bai5-password");
    const conFirm = confirm("Hiện mật khẩu");
    if(conFirm){
        passWord.type = 'text';
    }
}
