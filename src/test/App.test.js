import React from 'react';
import App from '../main/App';
import { shallow } from 'enzyme';
import * as Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import Header from "../main/Header";
import TaskSchedulerCalendar from "../main/TaskScheulerCalendar";

Enzyme.configure({ adapter: new Adapter() });

it('should render header component', function() {
  const wrapper = shallow(<App/>);

  expect(wrapper.find(Header).exists()).toBe(true);
});

it('should render Calender component', function() {
  const wrapper = shallow(<App/>);

  expect(wrapper.find(TaskSchedulerCalendar).exists()).toBe(true);
});
