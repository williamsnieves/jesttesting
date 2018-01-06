import getBooks from './books'
describe('Books content suite', () => {
    it('book list should be a valid array', () => {
        expect(Array.isArray(getBooks())).toBe(true)
    })
    it('book list should be greater than 0', () => {
        expect(getBooks().length).toBeGreaterThan(0)
    })
    it('book list should contain the property author', () => {
        const  dummyObject = [{id: 4, author: 'George Martin', title: 'Game of Thrones', publish_date: 2000}]
        expect(getBooks()[0]).toHaveProperty('author')
    })
    it('book list should contain at least this object', () => {
        const  dummyObject = {id: 4, author: 'George Martin', title: 'Game of Thrones', publish_date: 2000}
        expect(getBooks()[3]).toMatchObject(dummyObject)
    })
})