const UpdateEvent = {
  PersonalBest: 'personalBest',
  GameFinished: 'gameFinished',
};

class LiveUpdateNotifier {
  events = [];
  handlers = [];
  playerNames = ['Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'James', 'Alex', 'Jordan'];

  constructor() {
    setInterval(() => {
      const randomPlayer = this.playerNames[Math.floor(Math.random() * this.playerNames.length)];
      const randomScore = (Math.random() * 2).toFixed(3);
      const eventType = Math.random() > 0.5 ? UpdateEvent.PersonalBest : UpdateEvent.GameFinished;
      
      this.broadcastEvent(randomPlayer, eventType, {
        player: randomPlayer,
        score: randomScore,
        date: new Date().toLocaleDateString(),
      });
    }, 5000);
  }

  broadcastEvent(player, type, value) {
    const event = {
      player: player,
      type: type,
      value: value,
      timestamp: Date.now(),
    };
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const liveUpdateNotifier = new LiveUpdateNotifier();
export { UpdateEvent, liveUpdateNotifier };
