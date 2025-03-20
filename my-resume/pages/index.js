import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Резюме</title>
				<meta name="description" content="Резюме разработчика" />
			</Head>

			<main>
				<h1>Резюме</h1>
				<h2>О себе</h2>
				<p>Я разработчик с опытом работы в области веб-разработки и создания статических сайтов.</p>

				<h2>Опыт работы</h2>
				<ul>
					<li>Разработка веб-приложений на React и Next.js</li>
					<li>Опыт работы с Git и GitHub</li>
					<li>Работа с RESTful API</li>
				</ul>

				<h2>Образование</h2>
				<p>Бакалавр информационных технологий, Университет X</p>
			</main>
		</div>
	)
}
