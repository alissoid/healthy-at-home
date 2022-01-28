import React from "react";
import { useState, useEffect } from "react";
import {Post ,Title} from "./Home.js"


function News() {
  return (
    <div className="body pb-6 bg-gray-700 h-full">
      <Title/>
      <FetchPosts />
      {/* <Preview /> */}
    </div>
  );
}

const FetchPosts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticle() {
      const url =
        "https://newsdata.io/api/1/news?apikey=pub_39728b785fa958bfb865a408aa9d5da39b38&q=coronavirus&language=en&country=us";
      var res = await fetch(url);
      var data = await res.json();

      var articledata = data.results;
      setArticles(articledata);
      console.log('render, useeffect called')
    }

    getArticle();
  }, [])

  return (<div className="posts grid gap-4">
    {articles.map (item => 
      <Post caption={item.title} 
      description={item.pubDate}
      source={item.source_id} url={item.link} image={item.image_url != null ? item.image_url : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}/>
      )}
  </div>)
};

export default News;
