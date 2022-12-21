//vamos a hacerlo a ala antiwita solo para no olvidar conceptos
const consultaApi = async () =>{
    const myUrl = "mongodb://localhost:27017/myPortfolio"
    const res = await fetch(myUrl)
    const solved = await res.json()
}

export default consultaApi;