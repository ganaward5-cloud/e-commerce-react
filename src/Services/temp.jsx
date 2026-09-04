export default async function GetProduct() {

    try{
        const response=await fetch('https://fakestoreapi.com/products')
        const data= await response.json()
        return data
    }
    catch(error){
        console.log(error)
    }
    
}