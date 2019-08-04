import { shallow } from 'enzyme';
import React from "react";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TaskSchedulerCalendar from "../main/TaskScheulerCalendar";
import Calendar from 'react-calendar';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Rendering', () => {

    it('should render react Calendar', function () {
        const wrapper = shallow(<TaskSchedulerCalendar/>);

        expect(wrapper.find(Calendar)).toHaveLength(1);
    });
});
