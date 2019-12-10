import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'
import Logo from './App/Components/Logo'

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {

    //uncomment this to run an API query!
    this.loadArticles();
  }

  loadArticles = async(searchTerm = '', category = '') => {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  getArticleContent = () => {
    const {articles, loading} = this.state;

    let contentDisplated = null;

    if (loading) {
      contentDisplated = <ActivityIndicator style = {styles.activityIndicator}
                                            size = "large"
                                            color = "black" />;
    } else {
      contentDisplated = <News articles = {articles} />;
    }
    return (
      <View style= {{flex:1}}>
        {contentDisplated}
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo/>
        <Search getSearch={this.loadArticles}/>
        <View style={{flex:6, justifyContent: 'center'}}>
          {this.getArticleContent()}
        </View>
      </SafeAreaView>
    );
  }
}
{/*<Text style={{textAlign: 'center'}}>Have fun! :) {"\n"} Start by changing the API Key in "./App/Config/AppConfig.js" {"\n"} Then, take a look at the following components: {"\n"} NavigationButtons {"\n"} Search {"\n"} News {"\n"} 🔥</Text>*/}
{/*First, you'll need a logo*/}
{/*Then your search bar*/}
{/*And some news*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
