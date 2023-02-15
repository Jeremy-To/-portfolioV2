import { FaBook, FaGithub, FaLinkedin, FaNode, FaReact } from 'react-icons/fa';
import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiTypescript,
	SiRedux,
	SiNextdotjs,
	SiTailwindcss,
} from 'react-icons/si';

import { IMe } from './me.interface';

export const me = {
	name: 'Jérémy TO',
	subtitle: 'Front-End Developer',
	tagline: '',
	about:
		'Junior Front-End Developer building website. I love making fun projects on the side. Checkout some of my recent projects below!',
	location: 'Paris, France',
	image: '/assets/world.jpeg',
	education: [
		{
			degree: 'Certificate of completion',
			major: 'React',
			school: 'Udemy (Academind by Maximilian Schwarzmueller)',
			graduation: '2022',
			awards: [''],
		},
		{
			degree: 'Certificate of completion',
			major: 'Front-end Development',
			school: 'Codecademy',
			graduation: '2022',
			awards: [''],
		},
		{
			degree: 'Certificate of completion',
			major: 'Computer Science (CS50)',
			school: 'University of Harvard x EDX',
			graduation: '2022',
			awards: [''],
		},
	],

	projects: [
		{
			name: 'E-commerce',
			description: 'A ecommerce app to buy books.',
			contribution:
				'I used React for the front-end and Firebase for the back-en in order to build this app.',
			technologies: ['React.js', 'Firebase'],
			links: [
				{
					name: 'E-commerce',
					uri: 'https://latest-shop-app.vercel.app',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/LATEST-SHOP-APP',
				},
			],
			image: '/assets/BookStore.png',
		},
		{
			name: 'TalkRoom',
			description: 'TalkRoom bring people together, create a room or join one',
			contribution:
				'Built it entirely with React for the front-end and firebase for the back-end ',
			technologies: ['Firebase', 'React'],
			links: [
				{
					name: 'TalkRoom',
					uri: 'https://the-chat-app-jeremy-to.vercel.app',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/TalkRoom',
				},
			],
			image: '/assets/ChatApp.png',
		},
		{
			name: 'This Website',
			description: 'A website to display my projects and resume',
			contribution:
				'I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Netlify.',
			technologies: ['React', 'Typescript', 'Chakra-UI', 'Vercel'],
			links: [
				{
					name: 'Jeremy TO Website',
					uri: 'https://Jeremyto.com',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/portfolioReact',
				},
			],
			image: '/assets/myWebsite.jpeg',
		},

		{
			name: 'Weather app',
			description:
				'A Weather app using an api to get weather based on the place of your choise',
			contribution:
				'I built this app using react for fetching geolocalisation and weather form it.',
			technologies: ['React.js', 'Javascript', 'Css', 'HTML'],
			links: [
				{
					name: 'Weather app',
					uri: 'https://weatherapp-jeremyto.vercel.app/',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/weatherapp',
				},
			],
			image: '/assets/weatherapp.jpeg',
		},
	],
	skills: [
		{
			name: 'Typescript',
			icon: SiTypescript,
		},
		{
			name: 'JavaScript',
			icon: SiJavascript,
		},
		{
			name: 'React',
			icon: FaReact,
		},
		{
			name: 'Redux',
			icon: SiRedux,
		},
		{
			name: 'NextJs',
			icon: SiNextdotjs,
		},
		{
			name: 'Tailwindcss',
			icon: SiTailwindcss,
		},
		{
			name: 'Html',
			icon: SiHtml5,
		},
		{
			name: 'Css',
			icon: SiCss3,
		},
	],
	social: [
		{
			name: 'Github',
			icon: FaGithub,
			uri: 'https://github.com/Jeremy-To',
			hover: {
				bg: 'blue.500',
				color: 'white',
			},
		},
		{
			name: 'LinkedIn',
			icon: FaLinkedin,
			uri: 'https://www.linkedin.com/in/jérémy-to-b13227253/',
			hover: {
				bg: 'blue.500',
				color: 'white',
			},
		},
		{
			name: 'My résumé',
			icon: FaBook,
			uri: '/assets/CV FR Jeremy TO.pdf',
			hover: {
				bg: 'blue.500',
				color: 'white',
			},
		},
	],

	contact: {
		email: 'Jeremy_to@outlook.fr',
	},
} as IMe;
