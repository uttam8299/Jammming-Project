import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    //Add Track Method
    addTrack(e){
        this.props.onAdd(this.props.track);
    }
    //Remove track Method
    removeTrack(e){
        this.props.onRemove(this.props.removeTrack);
    }

    // renderAction Method

    renderAction(){
        if(this.props.isRemoval){
            return <button className = "Track-action" onClick = {this.removeTrack}>-</button>
        }
        return <button classname="Track-action" onClick={this.addTrack}>+</button>
    }


    render(){
        return (
            <div className="Track">
             <div className="Track-information">
              <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist}| {this.props.track.album}</p>
             </div>
             {this.renderAction()}
            </div>
        );
    }
}

export default Track;
