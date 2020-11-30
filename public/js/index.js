console.log("link Working");

class Tile {
  constructor(name) {
    this.name = name;
    this.src = 'images/' + name + '.jpg';
    this.display = 'hidden';
  }
}


class Board {
  constructor() {
    this.tiles = [];
    this.images = ['benches', 'bridge', 'coast', 'park', 'rails', 'rocks'];
    this.selectedTiles = []
  }

  duplicateImages() {
    const imagesCopy = Array.from(this.images);
    this.images = imagesCopy.concat(this.images);
  }

  randomiseImages() {
    var m = this.images.length,
      t, i;

    // Pick a remaining element
    while (m) {
      i = Math.floor(Math.random() * m--);

      // Swap it with the current element
      t = this.images[m];
      this.images[m] = this.images[i];
      this.images[i] = t;
    }
    console.log(this.images);
  }

  createTilesObjects() {

    // 1. Create paired images
    const imagesCopy = Array.from(this.images);
    this.images = imagesCopy.concat(this.images);

    // 2. Randomise images
    var m = this.images.length,
      t, i;

    // Pick a remaining element
    while (m) {
      i = Math.floor(Math.random() * m--);

      // Swap it with the current element
      t = this.images[m];
      this.images[m] = this.images[i];
      this.images[i] = t;
    }

    // 3. Create tile objects
    const board = this.tiles;

    this.images.forEach(function(image) {
      let tile = image;
      tile = new Tile(tile);
      board.push(tile)
    });
  }

  populateBoard() {
    // 1. Create html template
    let index = 0;
    this.tiles.forEach(function(tile) {
      let wrapper = $("<div/>", {
        class: "col-sm-6 col-md-4"
      });
      let inner = $("<a/>", {
        class: "lightbox"
      });
      let img = $("<img>", {
        class: tile.display,
        src: tile.src,
        alt: tile.name + index
      });

      // 2. Apply template to UI
      setTimeout(() => {
        wrapper.append(inner.append(img)).appendTo('.row');
      }, (index) * 200);
      index++;
    });
  }

  setChosenTile(tile) {
    this.selectedTiles.push(tile);
  }

  checkMatch() {
    const tiles = this.selectedTiles;
    const matchParams = /[a-zA-Z]+|[0-9]+/g;

    const [tile1, tile1ID] = tiles[0].match(matchParams);
    const [tile2, tile2ID] = tiles[1].match(matchParams);

    const selectedTile1 = $("div.row").find('img').get(tile1ID);
    const selectedTile2 = $("div.row").find('img').get(tile2ID);

    if (tiles.length === 2) {
      if (tile1 === tile2) {
        console.log('Its a match');
      } else {
        setTimeout(function() {
          selectedTile1.classList.toggle('hidden');
          selectedTile1.classList.toggle('fixed');
          selectedTile2.classList.toggle('hidden');
          selectedTile2.classList.toggle('fixed');
        }, 400);
      }
      this.selectedTiles = [];
    }
  }

}





function start() {
  b = new Board();
  b.createTilesObjects();
  b.populateBoard();
}

function turnTile(e) {
  const target = e.target;
  const tileID = $(target).attr('alt');

  if ($(target).is('img') === true) {
    if ($(target).hasClass('fixed') !== true) {
      target.classList.toggle('hidden');
      target.classList.toggle('fixed');
      b.setChosenTile(tileID);
    }
  }
}








$('.row').click(function(e) {
  turnTile(e);
  if (b.selectedTiles.length === 2){
    b.checkMatch();
  }
});







start();
/*

  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/park.jpg" alt="Park">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/bridge.jpg" alt="Bridge">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/tunnel.jpg" alt="Tunnel">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/coast.jpg" alt="Coast">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/rails.jpg" alt="Rails">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/traffic.jpg" alt="Traffic">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/rocks.jpg" alt="Rocks">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/benches.jpg" alt="Benches">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/sky.jpg" alt="Sky">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/sky.jpg" alt="Sky">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/sky.jpg" alt="Sky">
    </a>
  </div>
  <div class="col-sm-6 col-md-4">
    <a class="lightbox">
      <img src="images/sky.jpg" alt="Sky">
    </a>
  </div>

*/
