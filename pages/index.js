import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumeSection from '../components/ResumeSection';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Мое Резюме</title>
				<meta name="description" content="Резюме разработчика" />
			</Head>

			<Header />

			<main>
				<h1>Мое Резюме</h1>
				<ResumeSection title="Обо мне" content="Краткая информация обо мне." />
				<ResumeSection title="Опыт работы" content="Мой опыт работы." />
				<ResumeSection title="Образование" content="Мое образование." />
				<ResumeSection title="Навыки" content="Мои навыки." />
			</main>

			<Footer />
		</div>
	);
}