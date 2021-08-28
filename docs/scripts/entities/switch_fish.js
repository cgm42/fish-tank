class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/sushicat.gif';
  }
  onClick(event) {
    this.height = this.height * 1.5;
    this.width = this.width * 1.5;
    setTimeout(() => {
      this.height = this.height / 1.5;
      this.width = this.width / 1.5;
    }, 200);
  }
}
