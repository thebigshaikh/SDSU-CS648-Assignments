/*eslint-env browser*/

function menu(){
    
    window.console.log(" Welcome to the inventory management system ");
    window.console.log("Command Menu");
    window.console.log("view : View products");
    window.console.log("update : Update products inventory");
    window.console.log("exit");

}

function view(inventory){
    inventory.forEach(function viewProducts(products) {
        window.console.log(products[0] + " "+ products[1]+ " ("+ products[2]+ ") $"+ products[3]);
    });
}

function update(inventory){
    sku = parseInt(window.prompt("Please enter product sku number"),10);
    

    quantity = parseInt(window.prompt("Enter new quantity"),10);

    var prod = false

    inventory.forEach(function updateProducts(products){
        if(products[0] == sku){
            prod = true
            products[2] = quantity;
            window.console.log("Product "+ products[0]+ " was updated to new quantity : "+ products[2]);
        }
    });

    if (prod==false){
        window.console.log("SKU doesnt exist!");
    }
}

function main(){
    inventory = [[1, 'Shirt', 10, 15.99], 
                 [2, 'Pants', 20, 19.99], 
                 [3, 'Jacket', 30, 20.99], 
                 [4, 'Tie', 40, 10.99],
                 [5, 'Socks', 50, 5]];

    menu();

    while(true){
        var c = window.prompt("Insert command");
        
            if (c == 'view') {
                view(inventory);
            }
            else if (c =='update') {
                update(inventory);
            }
            else if (c == 'exit'){
                break;
            }
            else{
                window.alert('Invalid Command');
            }
        }
}

main();