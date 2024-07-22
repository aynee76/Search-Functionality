const searchInput = document.getElementById("search-input");
const itemList = document.getElementsByTagName("li");

searchInput.addEventListener("input", function(){
    const searchText = searchInput.value.toLocaleLowerCase();

    for(i = 0; i < itemList.length; i++) {
        const itemName = itemList[i].textContent.toLocaleLowerCase();

        if(itemName.includes(searchText)) {
            itemList[i].style.display = "block";
        }else {
            itemList[i].style.display = "none"
        }
    }
})