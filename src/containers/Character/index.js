import React, { Component } from 'react';
import Loader from '../../components/Loader';



class Character extends Component {
    state = {
        name:null,
        characterimage:null,
        personimage:null
       
    }

    componentDidMount() {
        const { id} = this.props.match.params;
        const { hash } = this.props.location;
        const characterimage = hash.split('##');   
        this.setState({name:id, characterimage:characterimage[1], personimage:characterimage[2]})
    }

    render() {
        // console.log(this.state);
        return (           
            
            <div>
                {!this.state.name && <Loader />}
                {this.state.name &&

                    <div className="character">
                        {this.state.name} <br /><br />
                        <img src={this.state.characterimage} alt={this.state.name} />
                    </div>
                }
                {this.state.personimage &&
                    <div className="person">
                        <b />
                        <img src={this.state.personimage} alt={this.state.name}/>
                    </div> 

                }
                              

            </div>
            
        )
    }
}

export default Character;