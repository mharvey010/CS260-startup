const UpdateEvent = {
  PersonalBest: 'personalBest',
  GameFinished: 'gameFinished',
};

class LiveUpdateNotifier {
  events = [];
  handlers = [];
  playerNames = ['Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'James', 'Alex', 'Jordan'];

  constructor() {
  let port = window.location.port;
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
  this.socket.onmessage = async (msg) => {
    try {
      const event = JSON.parse(await msg.data.text());
      this.receiveEvent(event);
    } catch {}
  };
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
