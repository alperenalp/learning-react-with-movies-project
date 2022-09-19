import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: true
    }
  }
  //state = {showContent: true}

  showMore = () => {
    this.setState({showContent: !this.state.showContent})
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-75" type="button" onClick={this.showMore}>
          {/* this.props.children.props.cardTitle +" "+ this.props.collapseId */}
          {React.Children.map(this.props.children, children => children.props.cardTitle)+ " "+ this.props.collapseId}
        </button>

        {
          this.state.showContent ? (
            <div className="collapse show">
              <div className="card card-body">
                {this.props.children}
              </div>
            </div>
          ) : null
        }


      </div>
    );
  }

};

App.propTypes = {
  collapseId: PropTypes.string.isRequired
}

export default App;