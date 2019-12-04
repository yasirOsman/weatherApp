import {getMaxTemp, getDate, getAverageHumidity} from '../functions/functions';
import {data} from './testData';

test('should return maximum temperature of a day', () => {
    const testNumber = 8;
    expect(getMaxTemp(data.list,'14/12/2018')).toBe(testNumber.toFixed(2));
});

test('should return an array of unique dates', () => {
    const dates = ['11/12/2018','13/12/2018','14/12/2018']
        expect(getDate(data.list)).toEqual(dates);
})

test('should return average humidity', () => {
    const avgHumidity = (83 + 75 + 81) / 3;
    expect(getAverageHumidity(data.list, '11/12/2018')).toBe(avgHumidity.toFixed(2));
})
