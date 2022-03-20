// https://api.rawg.io/api/games?key=adf29adc165e42209ee721ca31a9efbc&dates=2021-04-01,2022-01-01&ordering=-rating&page_size=10


const BASE_URL = `https://api.rawg.io/api/games`
const API_KEY = `adf29adc165e42209ee721ca31a9efbc`

//Get the current month in format of 01 , 02, 03 ... 09 , etc
const currentMonth = () =>{
    const month = new Date().getMonth() + 1
    if(month < 10){
        return `0${month}`
    }
    else{
        return month
    }
}

// Get the current date . 
const currentDate = () =>{
    const date = new Date().getDate() 
    return date
}

// Get the current year 
const currentYear = () =>{
    const year = new Date().getFullYear() 
    return year
}


const fullCurrentYear = () => {
        // Combine the previous functions output in the format -> YYYY-MM-DD
        return `${currentYear()}-${currentMonth()}-${currentDate()}`
}

const previousYear = () =>{
    // Combine the previous functions output and get the previous year by
    // subtracting ( currentYear - 1 ) => 2022-1 => 2021-MM-DD
    return `${currentYear()-1}-${currentMonth()}-${currentDate()}`
}


//Join every function and output the full API with dynamic full date.
export function fullAPI(){
    return `${BASE_URL}?key=${API_KEY}&dates=${previousYear()},${fullCurrentYear()}&ordering=-rating&page_size=10`

}
 

 

 