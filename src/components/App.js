import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// require('dotenv').config();
// console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
    state = {
        movies: [],
        searchQuery: ""
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        //const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;  
        const baseUrl = "http://localhost:3002/movies";
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data)
        this.setState({ movies: data });
    }

    deleteMovie = async (movie) => {
        const baseUrl = `http://localhost:3002/movies/${movie.id}`
        await fetch(baseUrl, { method: "DELETE" })
        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
        this.setState({ movies: newMovieList });
    }

    searchMovie = (event) => {
        console.log(event.target.value)
        this.setState({ searchQuery: event.target.value })
    }

    // FETCH
    // addMovie = async (movie) => {
    //     await fetch(`http://localhost:3002/movies/`,
    //         { method: "POST", body: JSON.stringify(movie) })
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //         })
    //     this.setState(state => ({
    //         movies: state.movies.concat([movie])
    //     }))
    // }

    // AXIOS
    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
        this.getMovies();
    }

    // AXIOS
    editMovie = async (id, updatedMovie) => {
        await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
        this.getMovies();
    }

    // FETCH
    // editMovie = async (id, updatedMovie) => {
    //     await fetch(`http://localhost:3002/movies/${id}`, { method: "PUT", body:updatedMovie})
    // }


    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
            }).sort((a, b) => {
                return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
            });

        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route path='/' exact render={() => (
                            <React.Fragment>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <SearchBar
                                            movieSearchProps={this.searchMovie}
                                        />
                                    </div>
                                </div>

                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovieProp={this.deleteMovie}
                                />
                            </React.Fragment>
                        )}>
                        </Route>

                        <Route path='/add' render={(props) => (
                            <AddMovie
                                {...props}
                                addMovieProp={(movie) => { this.addMovie(movie) }}
                            />
                        )} />

                        <Route path='/edit/:id' render={(props) => (
                            <EditMovie
                                {...props}
                                onEditMovie={(id, updatedMovie) => { this.editMovie(id, updatedMovie) }}
                            />
                        )} />

                    </Switch>
                </div>
            </Router >
        )

    }

}
export default App;