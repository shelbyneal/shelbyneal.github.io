import Head from 'next/head';
import Image from 'next/image';

import '../styles/style.css';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
	return (
		<>
			<Head>
				<title>Shelby Neal</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>

			<div className="container">
				<header>
					<div className="wrapper">
						<h1>
							Shelby Neal
							<Image className="portrait" src="/images/selfportrait.png" alt="Photo of Me" />
						</h1>
						<p className="bio">
							Current Software Developer
							<br /><br />
							Former Mortgage Loan Operations Manager
							<br /><br />
							Virginia Tech Alumni (Data-Centric Computing)
							<br /><br />
							University Projects include:
							<br />
							<a style={{ color: 'powderblue', fontSize: '18px' }} href="/documents/overfitnoise_63910_20959824_Project_2_Group_05-1.html" title="Data Analysis Project">
								Least-Angle Regression (Presentation)
							</a>
							<br />
							<a style={{ color: 'powderblue', fontSize: '18px' }} href="/documents/music_subgenre_classifier.pdf" title="Machine Learning Project">
								Music Sub-Genre Classification (Report)
							</a>
							<br />
							<a style={{ color: 'powderblue', fontSize: '18px' }} href="/documents/regression_analysis.pdf" title="Regression Analysis Project">
								Real Estate Regression Analysis (Report)
							</a>
							<br />
							<a
								style={{ color: 'powderblue', fontSize: '18px' }}
								href="https://vtechworks.lib.vt.edu/handle/10919/109979"
								title="Object Detection Project"
							>
								Object Detection (Capstone)
							</a>
							<br /><br />
							Check out my website for a look into my e-Portfolio!
						</p>
						<div className="buttonBox">
							<a className="myButton" href="#projects">Go</a>
						</div>
					</div>
				</header>

				<main id="projects">
					<ProjectSection
						title="MajorKey Technologies, LLC"
						imgSrc="/images/mjk.jpg"
						imgAlt="Photo of MajorKey Technologies Logo"
						link="https://www.majorkeytech.com/"
						description="Since December, 2022 I have been working as a software developer for MajorKey Technologies, LLC. My job responsibilities include building and maintaining web applications for clients in the identity security space. I've worked in various frameworks, databases, and api's, including (but not limited to): GitHub, Jenkins, Docker, Kubernetes, Node, .NET, Javascript, Typescript, React, Bootstrap, Sass, Webpack, PostgreSQL, MSSQL, MySQL, SQLLite, MongoDB, AWS, GoogleCloud, Microsoft, Okta, SailPoint, ServiceNow, and CyberArk."
						creditLink="https://www.businesswire.com/news/home/20240617271426/en/MajorKey-and-Clango-Merge-to-Form-Identity-Security-Powerhouse"
						creditTitle="MajorKey and Clango Merge to Form Identity Security Powerhouse"
					/>

					<ProjectSection
						title="Virginia PolyTechnic Institute & State University"
						imgSrc="/images/vt.jpg"
						imgAlt="Photo of Virginia Tech"
						link="https://vt.edu/"
						description="After working full-time in construction for about 3 years, I made the decision to go back to school and get my degree. I graduated with a major in Data-Centric Computing on August, 2022. My interests in the field of computer science include software engineering, machine learning, and quantitative analysis, along with their applications to other fields."
						creditLink="https://vtx.vt.edu/articles/2020/07/unirel-testing-tracing-fall2020.html"
						creditTitle="VT News & Stories"
					/>

					<ProjectSection
						title="CityWorth Mortgage LLC"
						imgSrc="/images/cityworth.jpg"
						imgAlt="Group Photo of Me and My Team at CityWorth Mortgage"
						link="https://www.cityworth.com/"
						description="Seen above is a picture of me and my team after we were recognized as the #1 team in production for 2018. Along with managing operations for my team, I spent many hours on the side to help develop integration with SalesForce and Microsoft Pulse for the entire company. My customer service, collaborative, and interpersonal skills developed strongly during this time."
					/>
					
					<ProjectSection
						title="Singleton Electric Company, Inc."
						imgSrc="/images/singleton.jpg"
						imgAlt="Photo of Fairfax County Public Safety Headquarters"
						link="https://www.singletonelectric.com"
						description="Here is a picture of my largest project at Singleton Electric, the Fairfax County Public Safety Headquarters. While working for Singleton Electric, I was able to gain a fundamental understanding of what it takes to manage many large-scale contracts. My project management duties included being present on job sites or the main office as early as 5:00am to oversee construction, scheduling, and budgeting for the project."
						creditLink="https://en.wikipedia.org/wiki/File:Fairfax_County_Public_Safety_Headquarters_2020b.jpg"
						creditTitle="Wikimedia Commons"
					/>

					<ProjectSection
						title="Hobbies & Interests"
						imgSrc="/images/danceoff.jpg"
						imgAlt="Photo of Me Dancing in Mexico"
						description="Yes, that's a picture of me having a dance-off in Mexico while wearing suspenders. While I am very serious when it comes to getting my work done, I also find a lot of enjoyment in traveling and creative expression. As a side note, I have absolutely no idea how to dance; however, I have no reservations when it comes to diving head first into something new. I look forward to diving head first into many new projects in the near future!"
					/>
				</main>

				<footer>
					<div>
						<p className="copyright">© Shelby Neal 2025</p>
					</div>
				</footer>
			</div>
		</>
	);
}