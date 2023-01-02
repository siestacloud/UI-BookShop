import Book from "../core/book.js";
import Models from "../models/models.js";
import Views from "../views/views.js";
class Controllers {
  private privateModels: Models
  private privateView: Views
  constructor() {
    this.privateModels
    this.privateView
  }

  public SetPrivateModels(el: Models): void { this.privateModels = el }
  public SetPrivateViews(el: Views): void { this.privateView = el }

  //* Логика главной страницы 
  public PageMain(): void {
    this.privateView.DisplayMain(); //* отображение  (подключение функционала)
    this.selectCategories()
  }

  //* логика получения - обработки - отображения - выбранной категории пользователем
  private async selectCategories() {
    let categories = document.querySelectorAll<HTMLElement>('.books__category')

    let books = await this.privateModels.Get('Architecture')
    this.privateView.DisplayBooks(books)
    

    
    
    
    categories.forEach(category => {
      category.addEventListener("click", async () => {
        if (!category.dataset.index) { return }
        this.privateView.DisplayMovingCategories(+category.dataset.index)
        let books = await this.privateModels.Get(category.innerText)
        this.privateView.DisplayBooks(books)

      })
    
    
    })
  }



  


}
export default Controllers;



// AIzaSyBsMDinhM8dAeM41Bi_tAcfNrKMgGVQANI