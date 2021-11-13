import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {

  const [news, setNews] = useState([]);
  console.log(news);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-10-12&sortBy=publishedAt&apiKey=4040ebaebedc45c5ba09289259ca17fe')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <>
      {news.length === 0 ?
        <div className='App'><Spinner animation="border" /></div>
        :
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News nw={nw}></News>)
          }
        </Row>
      }
    </>
  );
}

export default App;
