import Header from "../main/Header";
import { shallow } from 'enzyme';
import React from "react";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Rendering', () => {

    it('should render Header with heading', function () {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('header').exists()).toBe(true);
        expect(wrapper.find('header').contains('TO-DO ORGANISER')).toBe(true);
        expect(wrapper.find('header').hasClass('App-header')).toBe(true);
    });
});
