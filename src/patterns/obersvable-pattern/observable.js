class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(newObserver) {
    this.observers.push(newObserver);
  }

  unsubscribe(currObserver) {
    this.observers = this.observers.filter(
      (observer) => observer !== currObserver
    );
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

function generateData() {
  return {
    rainPercent: Math.floor(Math.random() * 100),
    humidityPercent: Math.floor(Math.random() * 99),
    temperature: Math.floor(Math.random() * 80) + 31,
  };
}

function logger(data) {
  console.log(data);
}

export { Observable, generateData, logger };
