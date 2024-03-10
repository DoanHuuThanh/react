  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from './app/Home.tsx'
  import About from './app/About.tsx'
  import Layout from './app/Layout.tsx'
  import Contact from './app/Contact.tsx'
  import Show from './app/g5.tsx'
  import Help from './app/Help.tsx'
  import Dash from './app/Dash.tsx'
  import Post from './app/Post.tsx';
  import './App.css'


  const client = new ApolloClient({
    uri: 'http://127.0.0.1:3000/graphql',
    cache: new InMemoryCache()
  });

  function App() {
    return (
      <>
      <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Show" element={<Show />} />
            <Route path="Help" element={<Help />} />
            <Route path="Dash" element={<Dash />} />
            <Route path="Post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>

      </ApolloProvider>
      </>
    );
  }

  export default App;