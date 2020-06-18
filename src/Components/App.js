import React from 'react';
import SearchBar from './SearchBar';
import unSplash from './api/unSplash';
import Images from './Images';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        images:[]
      }
  }
  async fetchImages(value){
    const response = await unSplash.get('/search/photos',{ params:{ query:value }});
    this.setState({
      images: response.data.results
    })
  }
  handleSearchSubmit(value){
     this.fetchImages(value);
  }
  render(){
    const { images } = this.state;
    return(
      <div className="container">
         <SearchBar handleSearchSubmit={(value)=>this.handleSearchSubmit(value)} />
         <Images images={images} />
      </div>
    )
  }
}

export default App;