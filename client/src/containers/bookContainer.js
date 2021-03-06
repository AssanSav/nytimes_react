import React from 'react';
import BestsellerBook from '../components/nytimesBooks/bestsellerBook';
import BestsellerPast from '../components/nytimesBooks/bestsellerPast'
import { fetchNYTimesBooks, fetchBook} from '../actions/nytimes/bookactions'
import { connect } from 'react-redux';

class BookContainer extends React.Component{
  componentDidMount(){
    fetchNYTimesBooks(this.state)
  }
    handleClick = (e) => {
        this.props.fetchBook(e.target.dataset.target)
    }

    render(){

        if(!this.props.books_past){
            return(<div></div>)
        } else {
        return(
            <div>
                <ul>
                    <BestsellerPast books={this.props.books_past.data} handleClick={this.handleClick}/>
                </ul>
            </div>
        )}
    }
}

const mapStateToProps = (state) => {
    return{
        books_past: state.bookReducer.books_past
    }
}


export default connect(mapStateToProps,{fetchNYTimesBooks,fetchBook})(BookContainer)
