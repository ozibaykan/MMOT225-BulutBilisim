import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ImageBackground } from 'react-native';
export default class Joke extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (

        
       
      <View style={{ flex: 1, padding: 24 , backgroundColor:"pink"}}>
          
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
         
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{backgroundColor: "blue"}}>{"\n"}{"\n"}ŞAKA:{item.setup} {"\n"}{"\n"}Cevap:{item.punchline}
              </Text>
             
            )}
          />
        )}
      </View>
  
    );
  }
};