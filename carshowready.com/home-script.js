
let dropdown = document.getElementById("dropdown-arrow");
dropdown.addEventListener("click", function(){
    function showList(){
        let droplist =  document.getElementById("selection-dropdown");
        droplist.style.display = "block";
    }
    function hideList(){
        let droplist =  document.getElementById("selection-dropdown");
        droplist.style.display = "none";
    }
    document.getElementById("selection-dropdown").style.display == "block" ? hideList() : showList();
})

let dropdownItems = document.querySelectorAll("#selection-dropdown li");

dropdownItems.forEach(function(item) {
  item.addEventListener("click", function() {
    let link = this.querySelector("a");
    if (link) {
      link.click();
    }
  });
});