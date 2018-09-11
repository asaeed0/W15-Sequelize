function devour(pizza_id) {

    //  PUT request
    $.ajax({
        type: "PUT",
        url: '/api/updatePizza/',
        data: {
            pizzaId: pizza_id,
        },
        success: (data) => {
            console.log('Sucessful PUT request');
            window.location.assign("/"); 
        }
    });
}

function addPizza() {
    
    //  Gets the pizza name from the input field
    let newPizza = $('#pizza_name').val().trim();
    
    if(newPizza.length > 3) {

        //  POST request
        $.ajax({
            type: "POST",
            url: '/api/addPizza/',
            data: {
                pizzaName: newPizza,
            },
            success: (data) => {
                console.log('Sucessful POST request');
                window.location.assign("/"); 
            }
        });
    }
}
