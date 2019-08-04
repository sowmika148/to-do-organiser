import { shallow } from 'enzyme';
import React from "react";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TaskScheduler from "../main/TaskScheduler";
import DatePicker from "react-datepicker";

Enzyme.configure({ adapter: new Adapter() });

describe('Header Rendering', () => {

    it('should render react Calendar', function () {
        const wrapper = shallow(<TaskScheduler/>);

        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div').hasClass('Task-scheduler-container')).toBe(true);
        expect(wrapper.find('div').contains('Select Date:')).toBe(true);
        expect(wrapper.find(DatePicker)).toHaveLength(1);
    });
});
