import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        counter: 1,
        ImageURL: 'https://picsum.photos/200',
        tags: ["tag1","tag2","tag3"]
     }; // state is an object in react that includes any data that teh object needs

     styles = {
         fontSize: '50px',
         fontWeight: "Bold"
     }

     renderTags() {
         if(this.state.tags.length === 0) return <p>There are no tags</p>;
         
         return <ul>{this.state.tags.map(tag => <li id={tag}>{tag}</li>)}</ul>;
     }

    render() { 
        
        //let classes = this.getBadgeClasse();

        return (
                <React.Fragment>
                    <span style={this.styles} className={this.getBadgeClasse()}>
                        {this.state.count}
                    </span> 
                    <button>
                        Increment
                    </button>
                    <span className={this.getBadgeClasse()} style= {{fontSize:'30px'}} >
                        {this.formatCount()}
                    </span> 
                    <button onClick ="Increment();">
                        Increment
                    </button>
                    <span>
                        <img src={this.state.ImageURL}></img>
                    </span> 
                    <span>
                        <ul>{this.renderTags()}</ul>
                    </span>

                </React.Fragment>
                
                ); // inside the curly brackets you can add anything 
    }
    getBadgeClasse() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    } 
    Increment() {
        const { count } = this.state;
        count++;
        return count;
    }
}
 


export default Counter;