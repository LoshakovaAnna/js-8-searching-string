document.addEventListener("DOMContentLoaded", init);

const vocabulary = [
    "азбука", "алфавит", "арбуз", "аэропорт","багаж","батарея","вагон ","газета",
    "девочка","жаворонок","изваяние","кабина ","кабинет ","каблук","кавалерия","казарма","капитал ","мавзолей","назад","обаяние ","павильон"];

var arr_chosen_words = [];

function init(){
    let search_string = document.querySelector(".search-string");
    search_string.addEventListener('keyup', filterWordsForChoice);

    let btn = document.querySelector(".btn-search");
    btn.addEventListener('click', function (e) {
        event.preventDefault();
        open(`https://www.google.com/search?q=${search_string.value}&btnI`);
    })

    let panel  = document.querySelector(".panel");
    panel.addEventListener('dblclick', addOnChoice);    
};

function filterWordsForChoice(){
    let search_string = document.querySelector(".search-string");
    let val_for_search = search_string.value;             

    searchInVocabulary(val_for_search);       

    let panel  = document.querySelector(".panel");
    destroyChildren(panel);

    for (let j = 0; j < arr_chosen_words.length; j++) {
        let new_item_on_search_list = document.createElement("div");
        new_item_on_search_list.className = "item-for-choose";
        new_item_on_search_list.textContent = arr_chosen_words[j];
        panel.appendChild(new_item_on_search_list);
    }   
};

function addOnChoice(e){
    let listWords = [...document.querySelectorAll(".item-for-choose")];    
    let  i = listWords.indexOf(e.target);   
    let list = document.querySelector(".list-choise");
    let newItemList  = document.createElement("li") ;
    newItemList.className = "item-choise";
    newItemList.textContent = listWords[i].textContent;
    list.appendChild(newItemList);
}

function searchInVocabulary(value){
    arr_chosen_words = [];
    for (let i = 0; i < vocabulary.length; i++) {
        if (vocabulary[i].includes(value)){
            arr_chosen_words.push(vocabulary[i]); 
        }
    }    
};

function destroyChildren(node)
{
    while (node.firstChild)
        node.removeChild(node.firstChild);
};
