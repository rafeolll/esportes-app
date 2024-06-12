import React, { useEffect, useState } from 'react';
 import { View, Text, FlatList } from 'react-native';
 import { styles } from '../config/styles';
 
 export default function NewsScreen() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
    //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=2a7edd4c76da4d3593cccdd8ac945669"
      "https://newsapi.org/v2/everything?q=sport&apiKey=2a7edd4c76da4d3593cccdd8ac945669"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
     
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
           
            <Text style={styles.titulo}>{item.title}</Text> <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}