import React from 'react';

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class ImportInf extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      postlar:[],
      postTitle:"",
      postBody:"",
      postId:0
    }
  }

  async componentDidMount(){
    let postListesi = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(p=>p.json());
    this.setState({postlar:postListesi});
  }

  postaTiklandi(x){
    this.setState({postId:x.item.id});
    this.setState({postTitle:x.item.title});
    this.setState({postBody:x.item.body});
  }

  render(){
    return(
      <View>
      <View>
        <Text style={styles.postIdsi}>Id: {this.state.postId}</Text>
        <Text style={styles.postTitlesi}>Title: {this.state.postTitle}</Text>
        <Text style={styles.postBodysi}>Body:{this.state.postBody}</Text>
      </View>
      <FlatList
        data={this.state.postlar}
        renderItem={(x)=>{
          return(
            <TouchableOpacity onPress={()=> this.postaTiklandi(x)}>
              <Text>Post Id'si: {x.item.id}</Text>
            </TouchableOpacity>
          )
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postIdsi:{
    backgroundColor:'#7e11bd',
    fontSize: 20
  },
  postTitlesi:{
    backgroundColor:'#c728c4',
    fontSize: 20
  },
  postBodysi:{
    backgroundColor:'#15a5e8',
    fontSize: 20
  }
});