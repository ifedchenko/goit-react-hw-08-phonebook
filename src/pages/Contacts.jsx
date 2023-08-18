// import Container from './Container/Container';
// import Section from './Section/Section';
import { Helmet } from 'react-helmet';

import Form from '../components/Form/Form';
import Contact from '../components/Contact/Contact';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Your contcts</title>
      </Helmet>
      <Form />
      <Filter />
      <Contact />
    </>
  );
}
