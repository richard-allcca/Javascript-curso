class Subject {
  constructor() {
    this.observer = [];
  }

  subscribe(obs) {
    this.observer.push(obs);
  }

  unsubscribe(obs) {
    this.observer = this.observer.filter((el) => el !== obs);
  }

  notify(o) {
    this.observer.forEach((obs) => {
      obs.notify(o);
    });
  }
}

// =================================================================
export class ItemSubject extends Subject {
  constructor() {
    super();
    this.items = [];
  }

  //? Notifications
  notify(item) {
    this.items.push(item);

    // para invocar un metodo de padre con nombre igual
    super.notify(this); // le pasamos el propio obj instanciado de esta clase
  }
}

// =================================================================
export class ListObserver {
  constructor(tag) {
    this.tag = tag;
  }

  notify(subject) {
    this.tag.innerHTML = "";
    // console.log("ovbservador lista");
    // console.log(subject.items);
    subject.items.forEach((el) => {
      let $ol = document.createElement("ol");

      $ol.innerHTML = `
        <li>Descipción: ${el.description} - Price: <b>${el.amount}</b></li>`;

      this.tag.appendChild($ol);
    });
  }
}

// =================================================================
export class TotalObserver {
  constructor(tag) {
    this.tag = tag;
  }

  //? Notifications
  notify(subject) {
    // console.log("Observador Total");
    let total = subject.items.reduce(
      (ac, current) => ac + parseFloat(current.amount),
      0
    );
    this.tag.innerHTML = total; //total en el dom
  }
}

// =================================================================
export class DynamicObserver {
  constructor(tag, fn) {
    this.tag = tag;
    this.fn = fn;
  }

  notify(subject) {
    this.fn(subject, this.tag);
  }
}
