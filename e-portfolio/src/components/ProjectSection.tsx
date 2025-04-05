import Image from 'next/image';

interface ProjectSectionProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  link?: string;
  description: string;
  creditLink?: string;
  creditTitle?: string;
}

export default function ProjectSection({
  title,
  imgSrc,
  imgAlt,
  link,
  description,
  creditLink,
  creditTitle
}: ProjectSectionProps) {
  return (
	<div className="project">
	  <Image src={imgSrc} alt={imgAlt} width={500} height={500} /*layout="responsive"*/ priority />
	  {creditLink && creditTitle && <p className="credit">Photo by [<a href={creditLink} target="_blank">{creditTitle}</a>]</p>}
	  <h2>
		<a href={link} target="_blank" rel="noopener noreferrer">
		  {title}
		</a>
	  </h2>
	  <p className="description">{description}</p>
	</div>
  );
}