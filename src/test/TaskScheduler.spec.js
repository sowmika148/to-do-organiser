import { shallow } from 'enzyme';
import React from "react";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TaskScheduler from "../main/TaskScheduler";

Enzyme.configure({ adapter: new Adapter() });

describe('Header Rendering', () => {

    it('should render task scheduler container', function () {
        const wrapper = shallow(<TaskScheduler/>);

        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div').hasClass('Task-scheduler-container')).toBe(true);
    });
});
