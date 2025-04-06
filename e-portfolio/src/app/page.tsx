import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return <>
		<h1>
			Shelby Neal
			<Image className="portrait" src="/images/selfportrait.png" alt="Photo of Me" />
		</h1>		
		<div className="bio">
			<h2>Current Software Developer</h2>
			<h2>Virginia Techn Alumni (Data-Centric Computing)</h2>
			<h2>Former Mortgage Loan Operations Manager</h2>
			<h2>University Projects Include:</h2>
			<h3><a href="/documents/overfitnoise_63910_20959824_Project_2_Group_05-1.html" title="Data Analysis Project">
				Least-Angle Regression (Presentation)
			</a></h3>
			<h3><a href="/documents/music_subgenre_classifier.pdf" title="Machine Learning Project">
				Music Sub-Genre Classification (Report)
			</a></h3>
			<h3><a href="/documents/regression_analysis.pdf" title="Regression Analysis Project">
				Real Estate Regression Analysis (Report)
			</a></h3>
			<h3><a href="https://vtechworks.lib.vt.edu/handle/10919/109979"	title="Object Detection Project">
				Object Detection (Capstone)
			</a></h3>
			<h2>Check out my website for a look into my e-Portfolio!</h2>
		</div>
		<div className="buttonBox">
			<Link href="/projects">
				<a className="myButton">Projects</a>
			</Link>
		</div>
	</>;
}