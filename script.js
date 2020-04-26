document.querySelector('#books').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var year = document.querySelector('#year').value;
    var publishing = document.querySelector('#publishing').value;
    var numbers = document.querySelector('#numbers').value;
    var pages = document.querySelector('#pages').value;
    var id = document.querySelector('#ID').value;
    
      

    var book = new Book(title, author, year, publishing, numbers, pages, id);
    var viewBooks = new ViewBooks();

    if(title === '' || author === '' || year === '' || publishing === '' || numbers === '' || pages === '' || id === ''){
        viewBooks.getMessage('ВВедите все данные! Книга не добавлена!', 'error');
    } else{
        viewBooks.addBook(book);
        viewBooks.getMessage('Книга успешно добавлена!', 'ok');
        viewBooks.clear();
        viewBooks.deleteBook();
    }

    event.preventDefault();
});



document.querySelector('#travelBook').addEventListener('submit', function(event){
    var title1 = document.querySelector('#title1').value;  
    var publishing1 = document.querySelector('#publishing1').value; 
    var numbers1 = document.querySelector('#numbers1').value;
    var pages1 = document.querySelector('#pages1').value;

    var viewBooks = new ViewBooks();
    var travelBook = new TravelBook(title1, publishing1, numbers1, pages1);

    
    if(title1 === '' || publishing1 === '' || numbers1 === '' || pages1 === ''){
        viewBooks.getMessage('ВВедите все данные! Книга не добавлена!', 'error');
    } else{
        viewBooks.addTravelBook(travelBook);
        viewBooks.getMessage('Книга успешно добавлена!', 'ok');
        viewBooks.clearTB();
        viewBooks.deleteBook();
    }

    event.preventDefault();
});



