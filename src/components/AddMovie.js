import React from 'react';
import serialize from 'form-serialize';
import { Link } from "react-router-dom";

class AddMovie extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });  //obje şeklinde submitten gelen name ve value'yi tutar
        console.log(newMovie);
        this.props.addMovieProp(newMovie);
        this.props.history.push('/');
    }


    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name" />
                    </div>
                    <div className="form-group col-md-12 ">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control float-end"
                            name="rating" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageUrl" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2 d-flex justify-content-around'>
                        <input
                            type="submit"
                            className="btn btn-md btn-success col-md-5"
                            value="Add Movie">
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


export default AddMovie;