class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = 'images/71382323.png';
  }
  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge + 5;
    const id = setInterval(() => {
      this.position.x += 200;
    }, 500);
    setTimeout(() => {
      clearInterval(id);
    }, 2000);
  }

}
