import React from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { Container, Hero } from '../App';

const linkStyle = {
    textDecoration: 'none',
    color: '#f8edeb'
}

const ArticleContainer = styled.div`
    background: #f8edeb;
    padding: 1rem 2rem;
    margin: 2rem 0;
`;

const Headline = styled.h3`
    font-size: 3rem;
    padding-bottom: 1rem;
`;

const Content = styled.p`
    line-height: 2rem;
    padding-top: 1rem;
`;

export default function Article() {
    const location = useLocation();
    const { article } = location.state;
    console.log(article); 
    return (
        <Container>  
                <Hero>
                    <Link style={linkStyle} to='/'>Covid Daily</Link>
                </Hero>
                <ArticleContainer>
                    <Headline>{article.title}</Headline>
                    <a style={{ textDecoration: 'none' }} href={`${article.url}`}>Read on original website</a>
                    <Content>{article.content}</Content>
                </ArticleContainer>
        </Container>
    )
}

