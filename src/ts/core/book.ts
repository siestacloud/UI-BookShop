
class Book {
  private privateID: string
  private privateTitle: string
  private privateAuthors: [string]
  private privateRatingsCount: number
  private privatevAverageRating: number
  private privateDescription: string
  private privateImageLink: string
  private privatePrice: number
  private privateCode: string





  constructor() {
    this.privateID
    this.privateTitle
    this.privateAuthors
    this.privateImageLink
    this.privateDescription
    this.privatePrice
    this.privateRatingsCount
    this.privatevAverageRating
    this.privateCode

  }



  SetPrivateID(v: string) { this.privateID = v }
  SetPrivateTitle(v: string) { this.privateTitle = v }
  SetPrivateAuthors(...v: [string]) { this.privateAuthors = v }
  SetPrivateImageLink(v: string) { this.privateImageLink = v }
  SetPrivateDescription(v: string) { this.privateDescription = v }
  SetPrivatePrice(v: number) { this.privatePrice = v }
  SetPrivateRatingsCount(v: number) { this.privateRatingsCount = v }
  SetPrivateAverageRating(v: number) { this.privatevAverageRating = v }
  SetPrivateCode(v: string) { this.privateCode = v }


  GetPrivateID() { return this.privateID }
  GetPrivateTitle() { return this.privateTitle }
  GetPrivateAuthors() { return this.privateAuthors }
  GetPrivateImageLink() { return this.privateImageLink }
  GetPrivatePrice() { if (!this.privatePrice) { return "Free" } return this.privatePrice }

  GetPrivateRatingsCount() { if (!this.privateRatingsCount) { return 0 } return this.privateRatingsCount }
  GetPrivateAverageRating() {
    if (!this.privatevAverageRating) { this.privatevAverageRating = 0 }


    let res: string = ""
    for (let i = 0; i < this.privatevAverageRating; i++) {
      res += `<img src="./img/Star.png" class="item__img" alt="" srcset="">`
      console.log("res    ", res);
    }

    const countEmpty = 5 - this.privatevAverageRating
    for (let i = 0; i < countEmpty; i++) {
      res += `<img src="./img/Star-grey.png" class="item__img" alt="" srcset="">`
    }


    return res
  }



  GetPrivateCode() { if (!this.privateCode) { return '' } return this.privateCode }
  GetPrivateFullDescription() {
    if (!this.privateDescription) {
      return "Unfortunately, there is no description"
    }
    return this.privateDescription.substring(0, 250)
  }
  GetPrivateSmallDescription() {
    if (!this.privateDescription) {
      return "Unfortunately, there is no description"
    }
    return `${this.privateDescription.substring(0, 90)} <span class='j-${this.GetPrivateID()}-desc-btn  m-desc-full-btn'>...</span>`
  }





  //? PublicDisplayFieldsForAnswer рендер поля ввода и кнопки отправки ответа на коментарий 
  PublicDisplayFieldsForAnswer(innerHTMLElement: HTMLInputElement, commentUnic: number, commentName: string) {

  }

  //? PuplicDisplayAnswer отображение ответа к коментарию
  PuplicDisplayAnswer(innerHTMLElement: HTMLDivElement) {

  }

  PuplicSetAnswer() {

  }

  //? privateSaveComment добавляю новый комментарий в массив в localStorage
  PublicSaveAnswer() {

  }


  //? PublicInitBtnMakeLike определение обработчиков на кнопки "лайк" и "дизлайк" комментария
  PublicInitBtnMakeLike() {
  }

}


export default Book;


// requestResult {"kind":"books#volumes","totalItems":200,"items":[{"kind":"books#volume","id":"JF9rk7z3wPoC","etag":"Mz90nCUKor0","selfLink":"https://www.googleapis.com/books/v1/volumes/JF9rk7z3wPoC","volumeInfo":{"title":"Roti-Cochon ...","publishedDate":"1890","industryIdentifiers":[{"type":"OTHER","identifier":"STANFORD:36105017530010"}],"readingModes":{"text":false,"image":true},"pageCount":152,"printType":"BOOK","categories":["Food"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"0.6.7.0.full.1","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=JF9rk7z3wPoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=JF9rk7z3wPoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"fr","previewLink":"http://books.google.ru/books?id=JF9rk7z3wPoC&printsec=frontcover&dq=%22subject:Food&hl=&as_pt=BOOKS&cd=1&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=JF9rk7z3wPoC&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=JF9rk7z3wPoC"},"saleInfo":{"country":"RU","saleability":"FREE","isEbook":true,"buyLink":"https://play.google.com/store/books/details?id=JF9rk7z3wPoC&rdid=book-JF9rk7z3wPoC&rdot=1&source=gbs_api"},"accessInfo":{"country":"RU","viewability":"ALL_PAGES","embeddable":true,"publicDomain":true,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false,"downloadLink":"http://books.google.ru/books/download/Roti_Cochon.epub?id=JF9rk7z3wPoC&hl=&output=epub&source=gbs_api"},"pdf":{"isAvailable":true,"downloadLink":"http://books.google.ru/books/download/Roti_Cochon.pdf?id=JF9rk7z3wPoC&hl=&output=pdf&sig=ACfU3U3fkISlG1xbFViXiLUlHhj0CER9hQ&source=gbs_api"},"webReaderLink":"http://play.google.com/books/reader?id=JF9rk7z3wPoC&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"FULL_PUBLIC_DOMAIN","quoteSharingAllowed":false}}]}
// events.js:36 