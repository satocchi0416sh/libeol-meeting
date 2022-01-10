import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

function App() {

  const month = "01";
  const date = "10";
  const hour = "10";
  const minutes = "00";

  return (
    <div className="App">

      <div class="card transition">
        <h2 class="transition">Libeolミーティング</h2>
        <p>開始: {month}月{date}日  {hour}:{minutes}<br />
          ミーティングID: 959 2140 9152<br />
          パスコード: X0r0Tf
        </p>
        <div class="cta-container transition"><a href="https://zoom.us/j/95921409152?pwd=bU4xWFlVTmxOb2tvY2FzRU5VNlBFZz09" class="cta" target="_blank">ミーティングに参加</a></div>
        <div class="card_circle transition"></div>
      </div>
    </div>
  );
}

export default App;
