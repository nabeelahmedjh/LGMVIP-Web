document.querySelector("#add-item").addEventListener("click", () => {
    removeChecked();
    addNewItem();
    itemCheck();
    removeClosed();
});

function itemCheck() {
    const items = document.querySelectorAll(".list-item input");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("change", () => {
            console.log("Here");
            document
                .querySelectorAll(".list-item span")
                [i].classList.toggle("checked");
        });
    }
}

function removeChecked() {
    const listItemsCheck = document.querySelectorAll(".list-item input");
    for (let i = 0; i < listItemsCheck.length; i++) {
        if (listItemsCheck[i].checked == true) {
            console.log("Deleted");
            listItemsCheck[i].parentElement.remove();
        }
    }
}

function removeClosed() {
    itemsButton = document.querySelectorAll(".list-item button");

    for (let i = 0; i < itemsButton.length; i++) {
        itemsButton[i].addEventListener("click", () => {
            console.log("close remove");
            itemsButton[i].parentElement.remove();
        });
    }
}

function addNewItem() {
    let new_item = document.querySelector("#new-item").value;
    document.querySelector("#new-item").value = "";
    if (new_item != "") {
        let div = document.createElement("div");
        div.innerHTML = `<li class="list-item">
                            <input type="checkbox">
                            <span class="start-0">${new_item}</span>
                            <button type="button" class="btn-close position-absolute end-0" aria-label="Close"></button>
                        </li>`;

        document.querySelector("#items-list").innerHTML += div.innerHTML;
        console.log(div.innerHTML);
    } else {
        console.log("Empty item not acceptable");
    }
}
