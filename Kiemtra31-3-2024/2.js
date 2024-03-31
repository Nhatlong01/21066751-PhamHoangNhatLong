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