class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/sushicat.gif';
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
