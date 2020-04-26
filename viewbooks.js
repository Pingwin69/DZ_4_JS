function ViewBooks(){

};

ViewBooks.prototype.addBook = function(type){
    var listAll = document.querySelector("#list-books");
    var ulList = document.createElement('ul');
    
    ulList.innerHTML = '<li>'+type.title+'</li>'+
    '<li>'+type.author+'</li>'+
    '<li>'+type.year+'</li>'+
    '<li>'+type.publishing+'</li>'+
    '<li>'+type.numbers+'</li>'+
    '<li>'+type.pages+'</li>'+
    '<li>'+type.id+'</li>'+
    '<li><button class="delete">Удалить</button></li>';

    listAll.appendChild(ulList);

    
};

ViewBooks.prototype.addTravelBook = function(type){
    var listAll = document.querySelector("#list-books");
    var ulList = document.createElement('ul');
   

    ulList.innerHTML = '<li>'+type.title1+'</li>'+
    '<li>'+''+'</li>'+
    '<li>'+''+'</li>'+
    '<li>'+type.publishing1+'</li>'+
    '<li>'+type.numbers1+'</li>'+
    '<li>'+type.pages1+'</li>'+
    '<li>'+''+'</li>'+
    '<li><button class="delete">Удалить</button></li>';

    listAll.appendChild(ulList);
};

ViewBooks.prototype.getMessage = function(message, nameCl){
    var block = document.createElement('div');
    block.className = nameCl;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var form = document.querySelector('.wrap');

    container.insertBefore(block, form); /* добавление перед формой сообщения */
};

ViewBooks.prototype.clear = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#publishing').value = '';
    document.querySelector('#numbers').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#ID').value = '';
};

ViewBooks.prototype.clearTB = function(){
    document.querySelector('#title1').value = '';
    document.querySelector('#publishing1').value = '';
    document.querySelector('#numbers1').value = '';
    document.querySelector('#pages1').value = '';
}

ViewBooks.prototype.deleteBook = function(){
    var deletBook = document.getElementsByClassName('delete');
    for(let item of deletBook){
        item.addEventListener('click', function(){
            item.parentElement.parentElement.remove();
            event.preventDefault();
        });
    }

};






