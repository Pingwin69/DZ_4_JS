function Book(title, author ,year, publishing, numbers, pages, id){
    this.title = title;
    this.author = author;
    this.year = year;
    this.publishing = publishing;
    this.numbers = numbers;
    this.pages = pages;
    this.id = id;
};    

this.getChapter = function () {
    return Math.ceil(this.pages / 25);
}

function TravelBook(title1, publishing1, numbers1, pages1){
    this.title1 = title1;
    this.publishing1 = publishing1;
    this.numbers1 = numbers1;
    this.pages1 = pages1;
};
    

this.getChapter = function () {
    return Math.ceil(this.pages1 / 5);
}
