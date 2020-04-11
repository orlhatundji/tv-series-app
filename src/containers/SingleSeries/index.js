import React, { Component } from 'react';
import SingleSeriesItem from '../../components/SingleSeriesItem';

class SingleSeries extends Component {
    state = {
        show:null,
        show_cast:null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => this.setState({ show: json, isFetching:false }))

        fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(response => response.json())
        .then(json => this.setState({ show_cast: json }))

    }

    render() {
        const { show, show_cast } = this.state;
        return (
            
            <div>
                <SingleSeriesItem show={show} show_cast={show_cast}/>              
            </div>
            
        )
    }
}

export default SingleSeries;