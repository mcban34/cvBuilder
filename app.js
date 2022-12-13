let genelDegerler = {
    isim:"",
    soyisim:"",
    
}

//!inputtan anlık olarak veri çektim
function veriAl(){

    userName =  $(".isim").val();
    denemeisim = $(".isimP");
    denemeisim.html(userName);

    surName =  $(".soyisim").val();
    denemesoyisim = $(".soyisimP");
    denemesoyisim.html(surName);

    genelDegerler['isim'] = denemeisim.html();
    genelDegerler['soyisim'] = denemesoyisim.html();

    str = JSON.stringify(genelDegerler);
    localStorage.setItem("genelDegerler",str);   
}



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
    });

});


const thumbnail = localStorage.getItem('thumbnail');

const previewImage = document.getElementById('preview');

if (thumbnail) {
    previewImage.setAttribute('src', thumbnail);
} else {
    previewImage.setAttribute('src', 'default.jpg');
}


//!save to pdf
$(".yazdır").click(function (e) { 
    e.preventDefault(); 
    var element = document.querySelector(".main");
    html2pdf(element);    
});



//!1 saniyede bir sayfa yenileme
// window.setTimeout( function() {
//     window.location.reload();
//   }, 1000);