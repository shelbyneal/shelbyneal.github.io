import ProjectSection from '@/components/ProjectSection';
import Link from 'next/link';

export default function Projects() {
	return <>
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

		<div className="buttonBox">
			<Link href="/">
				<a className="myButton">Home</a>
			</Link>
		</div>
	</>
}