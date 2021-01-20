import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/ajay.jpg';
import Title from './Title';

class App extends Component{
    state ={ displayBio:false};
    toggleDisplayBio=() =>{
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        
    
         return (
             <div>
                 <img src={profile} alt='profile' className='profile'/>
             <h1>Hi, This is Ajaysurya</h1>
             <Title />
                    { this.state.displayBio? (
                        <div>
                        <p>i work as freelancer</p>
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

 