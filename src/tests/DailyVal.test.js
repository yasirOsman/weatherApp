import React from 'react';
import {shallow} from 'enzyme'
import DailyVal from '../components/DailyVal';
import {data} from './testData';
import {getDate} from '../functions/functions';

test('Should render DailyVal with rows filled with the date, max temp and avg humidity', () => {
    const wrapper = shallow(<DailyVal theList={getDate(data.list)} list={data.list}/>);
    expect(wrapper).toMatchSnapshot();
})

