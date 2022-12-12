// localStorage.setItem("deneme","");




// str = JSON.stringify(a);
// str = JSON.stringify(a,"xx"); // (Optional) beautiful indented output.
// obj = JSON.parse(str);
// console.log(obj); // Logs output to dev tools console.
// alert(str); // Displays output using window.alert()

//!değeri ekrana yazdırdım
// degerAl =  localStorage.getItem("deneme");
// $(".sonuc").html(degerAl)



let genelDegerler = {
    isim:"",
    soyisim:"",
    img:""
}


//!inputtan anlık olarak veri çektim
function veriAl(){
    userName =  $(".isim").val();
    $(".isimP").html(userName);

    // surName =  $(".soyisim").val();
    // $(".soyisimP").html(surName);

    genelDegerler['isim'] = userName;
    // genelDegerler['soyisim'] = surName;
    str = JSON.stringify(genelDegerler);
    localStorage.setItem("genelDegerler",str);   
}




//!localstoragedeki veriyi parslayıp çektim
x =  localStorage.getItem("genelDegerler");
obj = JSON.parse(x);



//!son olarak objedeki veriyi ekrana yazdırdım
$(".isimP").html(obj.isim);
// $(".soyisimP").html(obj.soyisim);


//!resim çekmek
const input = document.getElementById('thumbnail');

input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        genelDegerler['img'] = reader.result;
        str = JSON.stringify(genelDegerler);
        localStorage.setItem("genelDegerler",str); 
    });
});

x =  localStorage.getItem("genelDegerler");
obj = JSON.parse(x);
console.log(obj)

const previewImage = document.getElementById('preview');

if (obj.img) {
    previewImage.setAttribute('src', obj.img);
} else {
    previewImage.setAttribute('src', 'default.jpg');
}






//!save to pdf
$(".yazdır").click(function (e) { 
    e.preventDefault(); 
    var element = document.querySelector(".test");
    html2pdf(element);    
});
