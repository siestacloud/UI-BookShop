import Book from "../core/book.js";
import Events from "./events/events.js";

// методы кдасса view отображают шаблоны html элементов с нужными данными.
class Views extends Events {
  constructor() {
    super()
  }
  DisplayMain(): void {
    console.log('@view');

    this.InitSliderBlink("j-slider-img", "j-dots", 'active')

  }


  public DisplayMovingCategories(num: number) {
    let activeCategory = document.querySelector<HTMLElement>('.active-cat')
    if (!activeCategory) { return }

    activeCategory.classList.remove('active-cat')
    let selectCategory = document.querySelector<HTMLElement>(".c" + num)
    if (!selectCategory) { return }
    selectCategory.classList.add('active-cat')
  }


  public DisplayBooks(books: Book[]) {

    const booksHTMLRoot: HTMLElement | null = document.querySelector('.books__row');
    if (!booksHTMLRoot) { return }
    booksHTMLRoot.innerText = ''

    console.log(books);

    console.log(books.length);
    books.forEach(book => {

      console.log("===================   book");

      const displayBook = `
      
      <div class="books__item item ${book.GetPrivateID()}">
      <img src="${book.GetPrivateImageLink()}" class="item__img_big" alt="" srcset="">
      <div class="item__column">
        <div class="item__autor">${book.GetPrivateAuthors()}</div>
        <div class="item__title">${book.GetPrivateTitle()}</div>
        <div class="item__stars">
          <div class="star">
            ${book.GetPrivateAverageRating()}
          </div>
          <div class="review">${book.GetPrivateRatingsCount()} review</div>
        </div>
        <div class="item__desc j-${book.GetPrivateID()}-desc">  <p class="desc__text"> ${book.GetPrivateFullDescription() && book.GetPrivateFullDescription().length > 35 ? ((): string => { return book.GetPrivateSmallDescription() })() : ((): string => { return book.GetPrivateFullDescription() })()}</p></div>
        <div class="item__price">${book.GetPrivatePrice()}   ${book.GetPrivateCode()}</div>

        <button class="item__btn">buy now</button>
      </div>
    </div>
    `;
      // booksHTMLRoot.innerHTML += displayBook
      // booksHTMLRoot.insertAdjacentText('beforeEnd', displayBook)  
      booksHTMLRoot.insertAdjacentHTML('beforeend', displayBook);
      const selectBook: HTMLElement | null = document.querySelector(`.j-${book.GetPrivateID()}-desc-btn`);
      if (!selectBook) { return }

      selectBook.addEventListener('click', () => {
        let bookDescHTML: HTMLElement | null = document.querySelector(`.j-${book.GetPrivateID()}-desc`);
        console.log(selectBook);
        if (!bookDescHTML) { return }
        bookDescHTML.innerHTML = book.GetPrivateFullDescription()

      })

    });
    // let booksFullDescHTMLBtn = document.querySelectorAll<HTMLElement>('.j-full-desc')



    console.log("===================   END`");


  }


  private showStars(book: Book) {
    

    // emptyStar = 5 - book.GetPrivateAverageRating.length 


    
    return 
    // book.GetPrivateFullDescription()





  }



}

export default Views