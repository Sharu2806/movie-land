import Category from "./Category";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

import axios from 'axios'

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
  create: jest.fn(),
}))


jest.mock('react-slick', () => jest.fn());
jest.mock('slick-carousel/slick/slick.css', () => "");
jest.mock('slick-carousel/slick/slick-theme.css', () => "");


axios.get.mockImplementation((url) => {
    if (url === 'www.example.com') {
        return Promise.resolve({ data: {
            results: {
                id: "1",
                original_name: "Test Name"
            }
        } });
    } else {
        return Promise.resolve({ error: "Something wrong" });
    }
});

describe('Render Category Component', () => {
    let store;
    let mockStore;
    beforeAll(() => {
        mockStore = configureStore();
    })

    it('Render Movie details with correct heading', () => {
        store = mockStore({apiKey: 'abc'});
        const wrapper = mount(<Provider store={store}>
            <Category  heading="Test Heading"/>
        </Provider>);
        console.log(wrapper.find("Category").prop("heading"));
        expect(wrapper.find("Category").prop("heading")).toEqual("Test Heading");
    
    });

    it('Render Movie details with correct heading', () => {
        store = mockStore({});
        const wrapper = mount(<Provider store={store}>
            <Category  type="/test"/>
        </Provider>);
        console.log(wrapper.find("Category").debug());
        expect(wrapper.find("Category").prop("heading")).toEqual("Test Heading");
    
    });

});