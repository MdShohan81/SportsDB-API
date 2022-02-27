const playesData = ()  =>{
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => console.log(data))
    console.log(url)
    console.log(searchValue)
    searchInput.value = '';
}