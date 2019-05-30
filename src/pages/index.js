import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Home from './home';
import MyNotes from './mynotes';
import Feed from './feed';
import Favorites from './favorites';
import Note from './note';
import Login from './login';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/feed/" component={Feed} />
        <Route path="/mynotes/" component={MyNotes} />
        <Route path="/favorites/" component={Favorites} />
        <Route path="/note/:id" component={Note} />
        <Route path="/login" component={Login} />
      </Layout>
    </Router>
  );
};

export default Pages;
