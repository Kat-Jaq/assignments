let getBeers = require('./fileio')

async function main() {
    
    getBeers()
        .then(result => {
            return JSON.parse(result)
        })
        .then(objBeers => {
            console.log(objBeers[0])
            // adding in [0] to the objBeers tells it to only print out one item from the list
            throw new Error("this is a very bad error")
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log("Finally Run")
        })

     let newBeers = await getBeers()

     console.log("New Beers")

     console.log(JSON.parse(newBeers)[1])

     console.log("End of Program")
        
}
main()