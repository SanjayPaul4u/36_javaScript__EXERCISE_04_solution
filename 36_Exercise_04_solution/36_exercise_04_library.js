
console.log("This file is for find solution for exercise 04");


class Library{
    constructor(givenBookList){
    this.bookList = givenBookList;
    this.issuedBooks = {};
    }

    getBookList(){
        // console.log(this.bookList);
        this.bookList.forEach(function(element, index){
            console.log(`The book number ${index+1} is:  ${element}`);
        })
    }

    issueBook(bookName, user){
        if(this.issuedBooks[bookName] === undefined){
            this.issuedBooks[bookName]= user;
        }
        else{
            console.log("this book is alredy issed");
        }
    }
    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}



// let lib = new Library(["legnedPaul", "legendHarrySir", "legendMom"]);
// lib.getBookList();
// ib.issueBook("legendHarrySir", "sanjay");
// lib.issueBook("legendHarrySir", "rohan");
// lib.returnBook("legendHarrySir");
// lib.issueBook("legendHarrySir", "rohan");
// lib.issueBook("legendHarrySir", "sanjay");
// lib.issueBook("legendHarrySir", "rohan");



//==================================================================================================
// //Main hu khatro ka khidari

// function Library(givenBookList){
//     this.bookList = givenBookList;
//     this.issuedBooks = {};
//     }

// Library.prototype.getBookList = function(){
//         // console.log(this.bookList);
//         this.bookList.forEach(function(element, index){
//             console.log(`The book number ${index+1} is:  ${element}`);
//         })
//     }

// Library.prototype.issueBook = function(bookName, user){
//         if(this.issuedBooks[bookName] === undefined){
//             this.issuedBooks[bookName]= user;
//             console.log("book is successfully issued");
//         }
//         else{
//             console.log("this book is alredy issed");
//         }
//     }
// Library.prototype.returnBook = function(bookName){
//         delete this.issuedBooks[bookName];
//     }