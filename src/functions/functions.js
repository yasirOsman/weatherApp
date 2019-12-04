//gets the maximum temperature from the provided data of given date
const getMaxTemp = (data,date) => {
    let max_Temp = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < data.length; i++){
        let current = data[i];
        let currentDate = current.dt_txt.split(" ");
        if(currentDate[0] === date ){
            if(current.main.temp_max > max_Temp){
            max_Temp = current.main.temp_max;
            }
        }
    }
    return (max_Temp -273.15).toFixed(2);
}

//gets the next 5 unique dates
const getDate = (data) => {
   let dates = [];
       for (let i = 0; i < data.length - 1; i++) {
           let currentDate = data[i].dt_txt.split(" ");
           let nextDate = data[i+1].dt_txt.split(" ");
           if (currentDate[0] != nextDate[0] && !dates.find(element => element === currentDate[0]) && dates.length != 5) {
               dates.push(currentDate[0]);
            }
            if(!dates.find(element => element === nextDate[0]) && dates.length != 5){
                dates.push(nextDate[0]);
            }
       }
   return dates;
}

//gets the average humidity of the given date
const getAverageHumidity =(data,date) => {
    let average = 0;
    let cnt = 0;
    for(let i = 0; i < data.length; i++){
        let current = data[i];
        let currentDate = current.dt_txt.split(" ");
        if(currentDate[0] === date ){
            average += current.main.humidity;
            cnt++;
        }
    }
    average = average / cnt;
    return average.toFixed(2);
}

export {getMaxTemp, getDate, getAverageHumidity}
