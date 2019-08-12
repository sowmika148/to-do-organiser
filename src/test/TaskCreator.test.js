import { shallow } from 'enzyme';
import React from "react";
import TaskCreator from "../main/TaskCreator";
import * as Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import DatePicker from "react-datepicker";

Enzyme.configure({ adapter: new Adapter() });

describe('Task Creation', function () {

    it('should render a div', function () {
        const wrapper = shallow(<TaskCreator/>);

        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div').hasClass('Task-create-container')).toBe(true);
    });

    it('should render 3 labels,1 input boxe, 1 text area and 1 DatePicker to enter task details', function () {
        const wrapper = shallow(<TaskCreator/>);

        expect(wrapper.find(DatePicker)).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('textarea')).toHaveLength(1);
        expect(wrapper.find('div').contains('Date:')).toBe(true);
        expect(wrapper.find('div').contains('Task Header:')).toBe(true);
        expect(wrapper.find('div').contains('Task Content:')).toBe(true);
    });

});
