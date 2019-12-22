import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            person:null
          }
    }

    async componentDidMount() {
        let url = 'http://starlord.hackerearth.com/bankAccount';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data, loading: false });
        console.log(data);
    }



    
    render() { 
        if (this.state.loading) {
            return <div>loading...</div>;
          }
      
          if (!this.state.person) {
            return <div>didn't get a person</div>;
          }
        return (  
         
        <div>
<ul>
          {this.state.person.map((item, index) => (
            <li key={item, index}>
              {item.Date},
   {item['Transaction Details'] }
            </li>
            
          ))}
        </ul>

       {/* { console.log("hello ... " + this.state.person[0].Date)} */}

           </div>
        );
    }
}
 
export default Home;