import { shallow } from 'enzyme';
import React from "react";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TaskScheduler from "../main/TaskScheduler";
import TaskCreator from "../main/TaskCreator"

Enzyme.configure({ adapter: new Adapter() });

describe('Header Rendering', () => {

    it('should render task scheduler container', function () {
        const wrapper = shallow(<TaskScheduler/>);

        expect(wrapper.find('div')).toHaveLength(2);
        //TODO: Testing one of the class has the className
        // expect(wrapper.find('div')[1].hasClass('Task-scheduler-container')).toBe(true);
    });

    it('should render add task button', function () {
        const wrapper = shallow(<TaskScheduler/>);

        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').contains('Add Task')).toBe(true);
        expect(wrapper.find('button').hasClass('Button')).toBe(true);
    });

    it('should render search input box', function () {
        const wrapper = shallow(<TaskScheduler/>);

        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('input').hasClass('Search-Box')).toBe(true);
    });

    it('should render task creator element', function () {
        const wrapper = shallow(<TaskScheduler/>);

        expect(wrapper.find(TaskCreator).exists()).toBe(true);
    });
});
