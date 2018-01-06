import React, {Component} from 'react'

export default class BookList extends Component {
    render (){
        return (
            <div className='list-books'>
                <pre>{this.props.books}</pre>
            </div>
        )
    }
}