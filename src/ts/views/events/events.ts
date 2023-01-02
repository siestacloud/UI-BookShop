import Book from "../../core/book";

class Events {



  // InitSliderBlink логика слайдера 
  InitSliderBlink(sliderBoxClass: string, sliderDotsName: string, activeClassName: string) {
    let sliderDotsClass = "." + sliderDotsName
    let activeClass = "." + activeClassName

    let sliderBox = document.querySelector('.' + sliderBoxClass); // блок с картинками
    let sliderDots: HTMLElement | null = document.querySelector(sliderDotsClass); //блок с пунктами (точками) (only desktop)

    console.log('sliderBox', sliderBoxClass);

    initDots(); // добавляю dots в DOM, вешаю обработчик
    initAutoplay(); // перемещаю класс active с заданным интервалом


    function initDots() {
      if (!sliderBox) { return }

      Array.from(sliderBox.children).forEach((image, index) => {
        // let dot = `<div class=${sliderDotsName}-item n${index}  ${index === 0 ? activeClassName : ""}" data-index="${index}" ></div>`
        let dot = `<div class="${sliderDotsName}-item n${index} ${index === 0 ? activeClassName : ""}" data-index="${index}" ></div>`
        if (!sliderDots) { return }

        sliderDots.innerHTML += dot;
        let dots = sliderDots.querySelectorAll<HTMLElement>(`${sliderDotsClass}-item`)

        dots.forEach(dot => {

          dot.addEventListener("click", function () {
            console.log("@@@OK", dot.dataset);

            if (!dot.dataset.index) { return }
            moveSlider(+dot.dataset.index)
          })
        })
      });
    }


    function initAutoplay() {
      setInterval(() => {
        console.log('play auto ');
        if (!sliderBox) { return }
        console.log('play auto in');

        let ind = sliderBox.querySelector("." + activeClassName) as HTMLElement | null;
        if (!ind) { return }
        if (!ind.dataset.index) { return }

        let curNumber = +ind.dataset.index;
        let nextNumber = curNumber === sliderBox.children.length - 1 ? 0 : curNumber + 1;
        moveSlider(nextNumber);
      }, 5000);
    }

    function moveSlider(num: number) {
      if (!sliderBox) { return }
      if (!activeClass) { return }
      let list = sliderBox.querySelector(activeClass)
      if (!list) { return }
      list.classList.remove(activeClassName);

      let selBox = sliderBox.querySelector(".n" + num)
      if (!selBox) { return }

      selBox.classList.add(activeClassName);

      if (!sliderDots) { return }

      let selDots = sliderDots.querySelector(activeClass)
      if (!selDots) { return }

      selDots.classList.remove(activeClassName);


      let selSlide = sliderDots.querySelector(".n" + num)
      if (!selSlide) { return }

      selSlide.classList.add(activeClassName);
    }
  }




  //? InitBtnComment обработчик кнопки "создать комментарий"
  public InitBtnComment(): void {

  }

  //? InitBtnSortComments определяю обработчики для "радио кнопок сортировки" и кнопки "избранное"
  InitBtnSortComments(innerHtmlElement: HTMLInputElement): void {

  }

  //?DisplayComments принимает список комментариев и рендерит  
  DisplayComments(comments: Comment[], innerHtmlElement: HTMLInputElement) {
  }

  InitTextAreaBigger() {
  }
}


export default Events
