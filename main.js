document.addEventListener("DOMContentLoaded", init);

function init(){
    
    const vocabulary = [
        "азбука", "алфавит", "арбуз", "аэропорт","багаж","батарея","вагон ","газета",
        "девочка","жаворонок","изваяние","кабина ","кабинет ","каблук","кавалерия","казарма","капитал ","мавзолей","назад","обаяние ","павильон"];
        var arr_list_for_serching = new Array();
        var arr_chosen_words = new Array();

        let serch_string = document.querySelector(".search-string");
        serch_string.addEventListener('keyup', function(e) {
            let val_for_search = serch_string.value;;
            console.log(val_for_search);


            let btn = document.querySelector(".btn-search");
            btn.addEventListener('click', function (e) {
                event.preventDefault();
                open(`https://www.google.com/search?q=${serch_string.value}&btnI`);
            })

            searchInVocabulary(val_for_search);
        

        
           let panel  = document.querySelector(".panel");
            destroyChildren(panel);
            for (let j = 0; j < arr_chosen_words.length; j++) {
                let new_item_on_search_list = document.createElement("div");
                new_item_on_search_list.className = "item-for-choose";
                new_item_on_search_list.textContent = arr_chosen_words[j];
                new_item_on_search_list.addEventListener('dblclick', function(e){
                    let list = document.querySelector(".list-choise");
                    let newItemList  = document.createElement("li") ;
                    newItemList.className = "item-choise";
                    newItemList.textContent =  new_item_on_search_list.textContent;
                    list.appendChild(newItemList);
                });
                panel.appendChild(new_item_on_search_list);
            }
            console.log(arr_chosen_words);

    });
    
    function addOnChoice(val){
        let list = document.querySelector(".list-choise");
        let newItemList  = document.createElement("li") ;
        newItemList.className = "item-choise";
        newItemList.textContent = val;
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
    } 

}