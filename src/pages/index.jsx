import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import PageHeader from '../components/PageHeader';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <PageHeader />
      <Hero />
    </div>
  );
}
