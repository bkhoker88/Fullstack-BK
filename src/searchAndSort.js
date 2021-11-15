//  // will use papaParse to extract data from file paths
  import Papa from 'papaparse'
  
  // function for getting data from CSV files as arrays
  let restaurantsList = []
  let cuisinesList = []
  
  const extractData = (csv, catagory) => {
      Papa.parse(csv, {
        download: true,
        complete: (res) => {
          console.log(`extracted ${csv}`)
          catagory==="cuisines"? cuisinesList = res.data : restaurantsList=res.data
        }
      })
  }
  extractData('cuisines.csv', "cuisines")
  extractData('restaurants.csv', "restaurants")

  export default function searchAndSort ( restName, rating, distance, price, cusine){
        let list = restaurantsList.slice(1);
        let name =0, stars =1, dist =2, cost=3, type =4;

        if (cusine){
            let cuisineArr = cuisinesList.filter(entry => entry[1].toLowerCase().includes(cusine.toLowerCase()))
            let cuisineId = cuisineArr[0][0]
            list = list.filter(entry => entry[type] === cuisineId)
        }

        if (restName) {
           list = list.filter(entry => entry[name].toLowerCase().includes(restName.toLowerCase()))
        }

        if (rating) {
            list = list.filter(entry => entry[stars] >= rating)
        }

        if (distance) {
            list = list.filter(entry => entry[dist] <= distance)
        }

        if (price) {
            list = list.filter(entry => entry[cost] <= price)
        }

        if (list.length) {
        list = list.sort((a,b) => {
                if (a[dist] === b[dist]){
                    if(a[stars] === b[stars]){
                        return b[cost] - a[cost]
                    }else{
                        return b[stars]-a[stars]
                    }
                }else {
                    return a[dist] - b[dist]
                }
            })
        }

    return list.slice(0,5)
  }