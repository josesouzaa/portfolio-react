function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

export default class UseAtivarAoScroll {
  constructor(sections, menuItens) {
    this.menuItens = menuItens;
    this.sections = document.querySelectorAll(sections);
    this.getCheckpoint = debounce(this.getCheckpoint.bind(this), 50);
  }

  checkCheckpoint(checkpointStart, checkpointEnd, sectionId) {
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`${this.menuItens}[href='#${sectionId}']`)
        .classList.add("ativo");
    } else {
      document
        .querySelector(`${this.menuItens}[href='#${sectionId}']`)
        .classList.remove("ativo");
    }
  }

  getSectionInfo(checkpoint) {
    this.sections.forEach((s) => {
      const sectionTop = s.offsetTop;
      const sectionHeight = s.offsetHeight;
      const sectionId = s.dataset.section;
      const checkpointStart = checkpoint >= sectionTop;
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
      this.checkCheckpoint(checkpointStart, checkpointEnd, sectionId);
    });
  }

  getCheckpoint() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    this.getSectionInfo(checkpoint);
  }

  addEvent() {
    window.addEventListener("scroll", this.getCheckpoint);
  }

  init() {
    this.addEvent();
    return this;
  }
}
