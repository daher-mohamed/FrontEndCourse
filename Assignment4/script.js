let selectedItem = null, inventoryItem = null;
const worldElement = document.getElementById('GameWorld');
const tools = document.querySelectorAll('.tool');
const restartTheGame = document.getElementById('reset');
const buttonsArray = {
    axe: 'sky',
    pickaxe: 'stone',
    shovel: 'dirt',
}
//in this function we init our world of the game 
function initWorld(){
    const titleTypes = ["sky", "dirt", "stone"];
    let length = 3;
    for(let i = 0; i < 25; i++){
        const tileDiv = document.createElement('div');
        const randTile = titleTypes[Math.floor(Math.random() * length)];
        tileDiv.classList.add("tile",randTile);
        tileDiv.addEventListener("click", () => handleTileClick(tileDiv))
        worldElement.appendChild(tileDiv);
    }
};


tools.forEach(tool =>{
    tool.addEventListener('click', ()=>{
        console.log(`The selected item ${tool.id}`);
    })
})

restartTheGame.addEventListener('click', () => {
    worldElement.innerHTML = '';
    initWorld();
    inventoryItem = null;
  });

  function handleTileClick(tileDiv) {
    const tileType = tileDiv.dataset.type; 
    if (!selectedItem || !tileType) return; 

    if (buttonsArray[selectedItem] === tileType) {
        inventoryItem = tileType;
        tileDiv.classList.remove(tileType);

        const inventorySlot = document.getElementById('inventory'); 
        inventorySlot.className = `inventory ${inventoryItem}`;
        
        console.log(`Collected ${tileType} into inventory.`);
    } else if (inventoryItem) {
        tileDiv.classList.add(inventoryItem);
        inventoryItem = null; 
        
        const inventorySlot = document.getElementById('inventory');
        inventorySlot.className = 'inventory';
        
        console.log(`Placed ${tileType} back into the world.`);
    }
}

  
initWorld();
