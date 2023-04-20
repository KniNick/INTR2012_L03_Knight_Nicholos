// validate the username field
function validateForm(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!username){
    console.log("Please enter username.");
    return false;
    }else if (!/^[a-zA-Z0-9]+$/.test(username)){
    console.log("Username can only contain letters and numbers");
    return false;
    }
    // validate the email field
    if (!email){
    console.log("Please enter an email address");
    return false;
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    console.log("Invalid email - Must contain @");
    return false;
    }
    // validate the password field
    if (!password){
    console.log("Please enter a password");
    return false;
    }else if (password.length < 8){
    console.log("Password must be at least 8 characters long");
    return false;
    }
    console.log("Form submitted!");
    return true;
    }
    const products = [
    'Short Sleeve',
    'Long Sleeve',
    'Jackets',
    'Rings',
    'Pendants',
    'Shirts',
    'Hoodies',
    'Pants',
    'Hats',
    'Shoes',
    ];
    const searchField = document.getElementById("search");
    const productList = document.getElementById("products");

    -function searchProducts(query){
        const matchProducts = products.filter((product)=>{
        return product.includes(query)
        })
        return matchProducts;
        }
        function updateProductList(){
        const query = searchField.value;
        const products = searchProducts(query);
        productList.innerHTML = "";
        for( let i = 0; i < products.length; i++){
        const product = products[i];
        const item = document.createElement("li");
        item.textContent = product;
        productList.appendChild(item);
        }
        }
        searchField.addEventListener("change", updateProductList);
        updateProductList();