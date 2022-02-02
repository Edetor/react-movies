import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from "../components/Preloader"
import {Search} from "../components/Search"

class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=5765f281&s=matrix`)
            .then(response=>response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    handleSearching = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=5765f281&s=${str}${
                    type !== 'all' ? `&type=${type}` : ''}`)
            .then(response=>response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;

        return <main className='container content'>
            <Search handleSearching = {this.handleSearching} />
            {loading ? (<Preloader/>) : (<Movies movies={movies} />)}
        </main>
    }
}

export {Main}