import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme'
import BookList from './bookList'

describe('Book List component test', () => {
    it('should render a book list component', () => {
        const wrapper = shallow(<BookList />);
        expect(wrapper.find('.list-books').length).toBe(1)
    })

    it('should mount in a full DOM', () => {
        expect(mount(<BookList />).find(BookList).length).toBe(1)
    })

    it('should have an array prop with the books', () => {
        const dummyBookList = [

        ]
        const wrapper = shallow(<BookList books={dummyBookList} />);
        expect(Array.isArray(wrapper.instance().props.books)).toBeTruthy()
    })

    it('should have a property author', () => {
        const dummyBookList = [
            {id: 1, author: 'Ayn Rand', title: 'Calumet K', publish_date: 1945},
        ]
        const wrapper = shallow(<BookList books={dummyBookList} />);
        expect(wrapper.instance().props.books[0]).toHaveProperty('author', 'Ayn Rand')
    })
})