import Head from 'next/head';
import Image from 'next/image';
import Content from '../components/Contents';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <PageHeader />
      <Content />
      <PageFooter />
    </div>
  );
}
