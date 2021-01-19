import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component{
    state ={ displayBio:false};
    toggleDisplayBio=() =>{
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        
    
         return (
             <div>
             <h1>This is ajaysurya</h1>
             <p>Iam an assistant system engineer trainee</p>
                    { this.state.displayBio? (
                        <div>
                        <p>i work in tata consultancy services</p>
                        <p>I am good in java</p>
                        <p>i love to play keyboard</p>
                        <button onClick={this.toggleDisplayBio}>show less</button>
                        </div>
                        ):(
                            <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                         )
                    }
                  <hr />
             <Projects />
             <hr/>
             <SocialProfiles />
             </div>
            
         );
    }
}

export default App;

 