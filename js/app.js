const playesData = ()  =>{
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => playersDataShow(data.player))
    
    
}

const playersDataShow = players =>{
    for(const player of players){
        const playerContainer = document.getElementById('player-container');
    const div = document.createElement('div');
    div.innerHTML = `<div class="card mb-3" style="width: 18rem;" >
                            <img src="${player.strThumb}" class="card-img-top" alt="Player-img">
                            <div class="card-body">
                            <h5 class="card-title">Player Name:${player.strPlayer} </h5>
                            <p class="card-text">player Country: <b>${player.strNationality}</b> </p>
                            <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="playerDetails('${player.idPlayer}')">Details</button>
                            </div>
                        </div>
                        `;
        playerContainer.appendChild(div);
        console.log(player)
    }
   
}

const playerDetails = (playerId) =>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => playerDetailsShow(data.players[0]))
}

const playerDetailsShow = (infoShow) =>{
    document.getElementById('details-container').innerHTML = `   <div class="modal fade" id="exampleModal" "aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Player Name:${infoShow.strPlayer}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <h1>${infoShow.idPlayer}</h1>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
}
