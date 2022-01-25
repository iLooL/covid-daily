import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Hero = styled.h1`
  font-family: 'Abril Fatface', cursive;
  color: #f8edeb;
  font-size: 7rem;
  font-weight: 500;
  letter-spacing: 5px;
  align-self: center;

`;

const Container = styled.section`
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ArticleWrapper = styled.div`
  background: #f8edeb;
  text-decoration: none;
  margin: 15px 0px;
  border-bottom: 1px solid black;
`;

const ArticleDisplay = styled.div`
  padding: 1rem 0.3rem 0.3rem 1rem;
`;

export { Container, Hero }

const API = axios.create({ baseURL: 'http://localhost:8080' });
function App() {
  // todays date
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // article variables
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // API calls
  const getArticles = async() => {
    setLoading(true);
    try {
      const result = await API.get('/');
      setArticles(result.data);
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Hero>Covid Daily</Hero>
      { loading && <p>Articles are loading...</p> }
      <div>
        <p>Updated on { date }</p>
        { articles.map((article, index) => (
          <ArticleWrapper>
            <Link style={{ textDecoration: 'none', color: '#000000' }} to={`/article/${article.title.replaceAll(' ', '-')}`} key={index} state={{article}}>
              <ArticleDisplay>
                <h3>{ article.title }</h3>
                <h4>Source: { article.id }</h4>  
              </ArticleDisplay>
            </Link>
          </ArticleWrapper>
        ))}
      </div>
    </Container>
  );
}

export default App;
