import React from "react";
import { Link } from "react-router-dom";


class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();  // enter özelliğini devre dışı bırakır yani sayfa yenilenmez
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5 mt-2">
                    <div className="col-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search a movie"
                            onChange={this.props.movieSearchProps}
                        />
                    </div>
                    <div className="col-2">
                        <Link
                            to="/add"
                            type="button"
                            className="btn btn-md btn-success"
                            style={{float:"right"}}>Add Movie
                        </Link>
                    </div>
                </div>

            </form>
        )
    }

}

export default SearchBar;