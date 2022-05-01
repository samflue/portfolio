module.exports = {
  siteTitle: 'SF_DEV | Front End Developer | Graphic Designer',
  siteDescription:
    'SF_Dev is a UK based Developer & Designer that creates a captivating user experience. I like to create innovative Digital Products.',
  siteKeywords:
    'software developer, software engineer, content freelancer, web developer, java developer, graphic design, front end, web apps, full stack',
  siteUrl: 'https://github.com/BlocLab/portfolio',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'UA-227601057-1',
  googleVerification: '',
  name: 'SF_Dev',
  location: 'London, UK',
  email: 'bloclabdev@gmail.com',
  github: '',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: '',
    },
    {
      name: 'Linkedin',
      url: '',
    },
    {
      name: 'Codepen',
      url: '',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Twitter',
      url: '',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
