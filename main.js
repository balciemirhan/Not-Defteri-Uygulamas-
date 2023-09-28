// TAMAMLANMIŞ GÖREVLER*************
function tamamlanmis() {
  let listItems = document.getElementsByTagName("li");
  // console.log(listItems.length);

  for (let x = 0; x < listItems.length; x++) {
    //   console.log(listItems[x]);
    listItems[x].addEventListener("click", function () {
      this.classList.toggle("tamamlanmis");
    });
  }
}
tamamlanmis();

let listItems = document.getElementsByTagName("li");
// console.log(listItems.length);

for (let x = 0; x < listItems.length; x++) {
  //   console.log(listItems[x]);
  listItems[x].addEventListener("click", function () {
    this.classList.toggle("tamamlanmis");
  });
}
silinenGorevler();

// this neyin içersinde çalışıyorsan o anlama gelir.
// Örneğin bu örnekteki this aslında=ListItemslar'dır.

// TAMAMLANMIŞ GÖREVLER***************

function silinenGorevler() {
  let silButonlari = document.getElementsByTagName("span");
  console.log(silButonlari);

  for (let i = 0; i < silButonlari.length; i++) {
    silButonlari[i].addEventListener("click", function () {
      let silinecek = this.parentElement; // (this=SilButonlar)
      silinecek.remove();
    });
    // parentElement ile sildikten sonra listenin boyutunu değiştirdik.
    // parentElement kullanmamızın sebebi spana tikladığımızda li nin silimesini istiyorum.
    // Dolayısıyla span->li nin Childi olduğu için bu yola başvurduk.
  }
}

// SİLİNEN GÖREVLER***************

let silButonlari = document.getElementsByTagName("span");
console.log(silButonlari);

for (let i = 0; i < silButonlari.length; i++) {
  silButonlari[i].addEventListener("click", function () {
    let silinecek = this.parentElement; // (this=SilButonlar)
    silinecek.remove();
  });
  // parentElement ile sildikten sonra listenin boyutunu değiştirdik.
  // parentElement kullanmamızın sebebi spana tikladığımızda li nin silimesini istiyorum.
  // Dolayısıyla span->li nin Childi olduğu için bu yola başvurduk.
}

// SİLİNEN GÖREVLER***************

let gorev = document.getElementsByTagName("input")[0];

// console.log(gorev);
gorev.addEventListener("keypress", function (e) {
  //   console.log(e.keyCode);
  if (e.keyCode === 13) {
    // alert("Enter'a basildi");

    let yeniNot = document.createElement("li");
    yeniNot.innerHTML = gorev.value;

    let yeniSpan = document.createElement("span");

    let yeniIcon = document.createElement("i");

    yeniIcon.setAttribute("class", "fa fa-window-close");

    yeniSpan.insertBefore(yeniIcon, yeniSpan.firstChild);

    yeniNot.insertBefore(yeniSpan, yeniNot.firstChild);

    let gorevler = document.getElementsByTagName("ul")[0];

    gorevler.insertBefore(yeniNot, gorevler.lastChild);

    silinenGorevler();
    tamamlanmis();
    gorev.value = " ";

    //insertBefore:EKLEME ANLAMINA GELİR.
  }
  //createElement eleman yaratır.
});
