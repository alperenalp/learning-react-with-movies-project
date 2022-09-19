import React from 'react';
import { Link } from "react-router-dom";

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageUrl: ""
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        const response = await fetch(`http://localhost:3002/movies/${id}`);
        const data = await response.json();
        console.log(data)
        this.setState({
            name: data.name,
            rating: data.rating,
            overview: data.overview,
            imageUrl: data.imageUrl
        });
    }

    onInputchange = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, rating, overview, imageUrl } = this.state;
        const updatedMovie = {
            name:name,
            rating:rating,
            overview:overview,
            imageUrl:imageUrl
        }
        const id = this.props.match.params.id;
        this.props.onEditMovie(id, updatedMovie)
        this.props.history.push('/');
    }




    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled />
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onInputchange} />
                    </div>
                    <div className="form-group col-md-12 ">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control float-end"
                            name="rating"
                            value={this.state.rating}
                            onChange={this.onInputchange} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL"
                                value={this.state.imageUrl}
                                onChange={this.onInputchange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview"
                                rows="5"
                                value={this.state.overview}
                                onChange={this.onInputchange} >
                            </textarea>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2 d-flex justify-content-around'>
                        <input
                            type="submit"
                            className="btn btn-md btn-success col-md-5"
                            value="Edit Movie">
                        </input>
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-md btn-primary col-md-5">Home
                        </Link>
                    </div>


                </form>
            </div>
        )

    }
}


export default EditMovie;