import React from 'react';
import {shallow} from 'enzyme'
import WeatherApp from '../components/WeatherApp';

test('Should render WeatherApp with weather forecast for next 5 days', () => {
    const wrapper = shallow(<WeatherApp/>);
    expect(wrapper).toMatchSnapshot();
})
  