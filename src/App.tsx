import React from "react";
import Head from './components/head'
import Content from './components/content'
import "./App.css";

function App() {
  return (
    <div className="site-card-border-less-wrapper flex-center">
    <Head />
    <Content time={'2021/07/25'} content={'我明天上班一定不能迟到'}/>
    </div>
  );
}

export default App
