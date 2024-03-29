import Head from 'next/head';
import Image from 'next/image';
import Concept from '../components/Concept';
import Content from '../components/Contents';
import Hero from '../components/Hero';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import Voice from '../components/Voice';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <PageHeader />
      <Hero />
      <Content />
      <Concept />
      <Voice />
      <PageFooter />
    </div>
  );
}
