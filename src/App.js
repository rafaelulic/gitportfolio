import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faPaintBrush,
  faDatabase,
  faMobileAlt,
  faMicrophone,
  faDesktop, 
  faChalkboardTeacher,
  faEnvelope,
  faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


import './styles/App.scss';
import Layout from './components/Layout';

library.add(
  fab,
  faPaintBrush,
  faDatabase,
  faMobileAlt,
  faMicrophone,
  faDesktop, 
  faChalkboardTeacher,
  faEnvelope,
  faExternalLinkAlt
)

function App() {
  return (
      <div className="App">
        <Layout />
      </div>
  );
}

export default App;
