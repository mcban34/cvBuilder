
let genelDegerler = {
    isimSoyisim:"",
    meslek:"",
    
}

//!inputtan anlık olarak veri çektim
function veriAl(){

    userName =  $(".isimSoyisim").val();
    denemeisim = $(".isimP");
    denemeisim.html(userName);

    surName =  $(".meslek").val();
    denemesoyisim = $(".soyisimP");
    denemesoyisim.html(surName);

    genelDegerler['isimSoyisim'] = denemeisim.html();
    genelDegerler['meslek'] = denemesoyisim.html();

    str = JSON.stringify(genelDegerler);
    localStorage.setItem("genelDegerler",str);   
}



//!localstoragedeki veriyi parslayıp çektim
x =  localStorage.getItem("genelDegerler");
obj = JSON.parse(x);
console.log(x);


//!son olarak objedeki veriyi ekrana yazdırdım
$(".isimP").html(obj.isimSoyisim);
$(".soyisimP").html(obj.meslek);

//!input değerinin içeriği kendi değerleriyle eşleşti
$(".isimSoyisim").val(obj.isimSoyisim);
$(".meslek").val(obj.meslek);



//!resim çekmek
// const input = document.getElementById('thumbnail');

// input.addEventListener('change', (event) => {
//     const image = event.target.files[0];

//     const reader = new FileReader();

//     reader.readAsDataURL(image);

//     reader.addEventListener('load', () => {
//         genelDegerler['img'] = reader.result;
//         strImg = JSON.stringify(genelDegerler);
//         localStorage.setItem("genelDegerler",strImg); 
//     });
// });

// z =  localStorage.getItem("genelDegerler");
// obj = JSON.parse(z);
// console.log(obj)

// const previewImage = document.getElementById('preview');

// if (obj.img) {
//     previewImage.setAttribute('src', obj.img);
// } else {
//     previewImage.setAttribute('src', 'default.jpg');
// }



//!resimn çekim altrernatif
const input = document.getElementById('thumbnail');

input.addEventListener('change', (event) => {
 
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
  
        localStorage.setItem('thumbnail', reader.result);
        // window.location.reload();
        var div = document.querySelector(".cv-pdf-content");
        div.outerHTML  = div.outerHTML ;
    });

});


const thumbnail = localStorage.getItem('thumbnail');

// const previewImage = document.getElementById('preview');
const previewImage = document.querySelector(".preview");

if (thumbnail) {
    previewImage.setAttribute('src', thumbnail);
} else {
    previewImage.setAttribute('src', 'default.jpg');
}


//!save to pdf
$(".yazdır").click(function (e) { 
    e.preventDefault(); 
    var element = document.querySelector(".cv-content");
    html2pdf(element);    
});


$(".hemenbasla").click(function (e) { 
    e.preventDefault();
        $(".accordion").slideDown();
        $(".cv-pdf").addClass("col-9");
        $(".cv-pdf").removeClass("col-12");
        $(".cv-pdf-giris").hide();
        $(".cv-pdf-content").show();
});