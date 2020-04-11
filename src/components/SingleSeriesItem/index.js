import React, { Component } from 'react';
import './index.css';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';



const SingleCharacter = ({ person }) => (
    

    <li>
        <Link to={`character/${person.character.name + '##' + person.character.image.medium || "" + '##' + person.person.image.medium || ""}`} >
            {person.character.name}
        </Link>
    </li>
)

class SingleSeriesItem extends Component {

    render() {
        const { show, show_cast } = this.props;
        var allimages = true;
        if(show_cast){
            for (var i=0; i<show_cast.length; i++){
                if (!show_cast[i].person.image){
                    allimages = false;
                }
            }
        }
        return (
            
            <div>
                { show === null && <Loader />}                
                { 
                    show !== null
                    &&
                    <div>
                        <p>{ show.name }</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt="show" src={show.image.medium} />
                        </p>
                    </div>
                }
                
                { show_cast  && allimages
                && 
                <ul className='series-cast'>
                    {show_cast.map(person => (
                        <SingleCharacter key={person.character.id} person={person}/>
                    ))}
                </ul> 
                }
                { show_cast  && !allimages
                && 
                <ul className='series-cast'>
                    {show_cast.map(person => (
                        <li key={person.character.id} >{person.name}</li>
                    ))}
                </ul> 
                }
                           
                </div>
            
        )   
        
    }
}

export default SingleSeriesItem;