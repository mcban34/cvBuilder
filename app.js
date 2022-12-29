

let genelDegerler = {

}












//!inputtan anlık olarak veri çektim
function veriAl(){


    let  userName =  $(".isimSoyisim").val();
    let userNamep = $(".isimP");
    userNamep.html(userName);

    let meslek = $(".meslek").val();
    let meslekP = $(".meslekP");
    meslekP.html(meslek)

    localStorage.setItem('emptyObject', JSON.stringify(genelDegerler));

    let user = localStorage.getItem('emptyObject');
    user = JSON.parse(user);
    user['isimSoyisim']=userName;
    user['meslek']=meslek;


   


    localStorage.setItem('emptyObject', JSON.stringify(user));





    $(".isimsoyisimP").html(user.isimSoyisim);


}





try {

 
        x =  localStorage.getItem("emptyObject");
        obj = JSON.parse(x);
        console.log(obj)
        $(".isimsoyisimP").html(obj.isimSoyisim)
        $(".isimSoyisim").val($(".isimsoyisimP").html())

        $(".meslekP").html(obj.meslek)
        $(".meslek").val($(".meslekP").html())



  } catch(error) {

    console.log("henüz veri gelmedi!");
}




//!localstoragedeki veriyi parslayıp çektim



//!son olarak objedeki veriyi ekrana yazdırdım

// $(".soyisimP").html(obj.meslek);

// //!input değerinin içeriği kendi değerleriyle eşleşti
// $(".isimSoyisim").val(obj.isimSoyisim);
// $(".meslek").val(obj.meslek);



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
        window.location.reload();
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
    var element = document.querySelector(".cv-pdf-cont");
    html2pdf(element);
});


var checkboxes = document.querySelectorAll(".myCheckbox");
var inputs = document.querySelectorAll(".myInput");

// Her bir checkbox elementine bir dinleyici ekle
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function() {
    // Checkbox'ın ona bağlı input elementini bul
    var inputId = this.getAttribute("data-input");
    var input = document.getElementById(inputId);

    if (this.checked) {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  });
}