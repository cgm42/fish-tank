class FlyFish extends Fish {
  constructor(options) {
    super(options);
    this.height = options.height || 200;
    this.width = options.width || 200;
    this.imageUri = '/images/gamer_fish.gif';
    this.surgeSecondsLeft = 0;
    this.maxSurge = 2.0;
    this.surgMult = 3.0;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity(100);
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }



  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
    setTimeout(() => {
      this.kill();
    }, 10000);
  }
}
