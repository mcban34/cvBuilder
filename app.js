let genelDegerler = {
    isim:"",
    soyisim:"",
    img:""
}

//!inputtan anlık olarak veri çektim
function veriAl(){


    userName =  $(".isim").val();
    denemeisim = $(".isimP");
    denemeisim.html(userName);
    surName =  $(".soyisim").val();
    denemesoyisim = $(".soyisimP");
    denemesoyisim.html(surName);

    // if(surName=="" && userName==""){
    //     return;
    // }

    // if(denemeisim.html(" ")){
    //     return;
    // }

    genelDegerler['isim'] = denemeisim.html();
    genelDegerler['soyisim'] = denemesoyisim.html();

    str = JSON.stringify(genelDegerler);
    localStorage.setItem("genelDegerler",str);   
}


//!veri çekme alternatifi
// $(".verial").change(function (e) { 
//     e.preventDefault();
//        userName =  $(".isim").val();
//     let denemeisim = $(".isimP");
//     denemeisim.html(userName)
//     surName =  $(".soyisim").val();
//     let denemesoyisim = $(".soyisimP");
//     denemesoyisim.html(surName);

//     if(surName=="" && userName==""){
//         return;
//     }

//     // if(denemeisim.html(" ")){
//     //     return;
//     // }

//     genelDegerler['isim'] = denemeisim.html();
//     genelDegerler['soyisim'] = denemesoyisim.html();

//     str = JSON.stringify(genelDegerler);
//     localStorage.setItem("genelDegerler",str);  
// });



//!localstoragedeki veriyi parslayıp çektim
x =  localStorage.getItem("genelDegerler");
obj = JSON.parse(x);



//!son olarak objedeki veriyi ekrana yazdırdım
$(".isimP").html(obj.isim);
$(".soyisimP").html(obj.soyisim);

//!input değerinin içeriği kendi değerleriyle eşleşti
$(".isim").val(obj.isim);
$(".soyisim").val(obj.soyisim);



//!resim çekmek
const input = document.getElementById('thumbnail');

input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        genelDegerler['img'] = reader.result;
        strImg = JSON.stringify(genelDegerler);
        localStorage.setItem("genelDegerler",strImg); 
    });
});

z =  localStorage.getItem("genelDegerler");
obj = JSON.parse(z);
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
