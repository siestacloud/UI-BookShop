import Book from "../core/book";

class Models {
 async Get(category: string) {
    let URI = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${category}%22&key=AIzaSyBsMDinhM8dAeM41Bi_tAcfNrKMgGVQANI&printType=books&startIndex=0&maxResults=10&langRestrict=en`


    const useRequest = () => {
      console.log(URI);
      return fetch(URI)
        .then((response) => response.json())
        .then((json) => {
          console.log(typeof json)
          return json;
        })
        .catch(() => { console.log('error') });
    }


    // let r=  async()=>{

    //   try {
    //     const response = await fetch(URI)
    //     const { data } = await response.json()
    //     return data
    //   } catch (error) {
    //     if (error) {
    //       return error
    //     }
    //   }
    // }


    let requestResult
    let books: Book[] = []
    const r = async () => {
      requestResult = await useRequest();

      requestResult.items.forEach((requestBook: {
        id:string
        volumeInfo: {
          title: string
          ratingsCount: number
          authors: [string]
          averageRating: number
          description: string
          imageLinks: { thumbnail: string }
        }
        saleInfo: {
          retailPrice: {
            amount: number
            currencyCode: string
          }
        }

      }) => {
        const book = new Book()
        this.check(requestBook.id) ? book.SetPrivateID(requestBook.id) : console.log();

        this.check(requestBook.volumeInfo.title) ? book.SetPrivateTitle(requestBook.volumeInfo.title) : console.log();
        this.check(requestBook.volumeInfo.authors) ? book.SetPrivateAuthors(...requestBook.volumeInfo.authors) : console.log();
        this.check(requestBook.volumeInfo.ratingsCount) ? book.SetPrivateRatingsCount(requestBook.volumeInfo.ratingsCount) : console.log();
        this.check(requestBook.volumeInfo.averageRating) ? book.SetPrivateAverageRating(requestBook.volumeInfo.averageRating) : console.log();
        this.check(requestBook.volumeInfo.description) ? book.SetPrivateDescription(requestBook.volumeInfo.description) : console.log();
        this.check(requestBook.volumeInfo.imageLinks.thumbnail) ? book.SetPrivateImageLink(requestBook.volumeInfo.imageLinks.thumbnail) : console.log();

        if (this.check(requestBook.saleInfo)) {
          if (this.check(requestBook.saleInfo.retailPrice)) {
            if (this.check(requestBook.saleInfo.retailPrice.amount)) {
              book.SetPrivatePrice(requestBook.saleInfo.retailPrice.amount)
              book.SetPrivateCode(requestBook.saleInfo.retailPrice.currencyCode)

            }
          }
        }
        books.push(book)
      });


    } // ждем пока запрос выполнится

     await r()
     
     // console.log("BOOKS",books);
    // let requestResult = { items: [] }
    // console.log(URI);
    // try {
    // let response = await fetch(URI)
    // requestResult = await response.json();

    // } catch {
    // console.log("error");

    // }








    return books
  }
  check(v: any) {
    if (!v) {
      return false
    }
    return true
  }
}



export default Models;