export default class UseAtivarItemMenu {
  constructor(itens) {
    this.menuItens = document.querySelectorAll(itens);
    this.addClass = this.addClass.bind(this);
    this.classAtivo = "ativo";
  }

  removeClass() {
    this.menuItens.forEach((i) => i.classList.remove(this.classAtivo));
  }

  addClass(event) {
    this.removeClass();
    event.target.classList.add(this.classAtivo);
  }

  addEvent() {
    this.menuItens.forEach((i) => i.addEventListener("click", this.addClass));
  }

  init() {
    this.addEvent();
    return this;
  }
}
