import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Name from './Name';

function setup(){
    const props = {
        Name: {
            name: "Nome",
            thumb: "image",    
            profession: "profession"
        }};
    return shallow(<Name {...props} />);
}

describe("Name Component Tests", () => {
    it('Render the Title as the Props', () => {
        const wrapper = setup();
        expect(wrapper.find('h1').text()).toEqual("Nome");
    });
    
    it('Render the Profession as the Props', () => {
        const wrapper = setup();
        expect(wrapper.find('span').text()).toEqual("profession");
    });
});
