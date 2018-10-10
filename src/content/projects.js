import treeIMG from '../images/treeapp.png';
import portfolioIMG from '../images/portfolio1.png';
import ColonieIMG from '../images/colbonc.png';
import CalIMG from '../images/calendar.png'

export default [
  {
    title: 'Tree Species',
    description: 'Cross-platform mobile application for the mapping of tree species made for the city where I studied. It displays a list and a map of the different trees. The app gets its data from an API and stores it locally so it can be used while being offline.',
    img: treeIMG,
    tags: [
      'Ionic', 'Angular', 'TypeScript', 'SASS', 'SQLite'
    ],
    code_link: 'https://github.com/schwdim/tree-species-app'
  }, {
    title: 'My Portfolio',
    description: 'This website was made in order to showcase my previous work. I used it as an opportunity to get the hang of React. The website is uploaded to GitHub Pages.',
    img: portfolioIMG,
    tags: [
      'React', 'SASS', 'JavaScript'
    ],
    demo_link: 'https://dschweizer.me/',
    code_link: 'https://github.com/schwdim/schwdim-portfolio/tree/master'
  },{
    title: 'Colonie Boncourt',
    description: 'A website for a summer camp not far from where I come from. The client is now able to maintain it easily thanks to the WordPress Divi plugin.',
    img: ColonieIMG,
    tags: [
      'WordPress', 'PHP', 'Divi'
    ],
    demo_link: 'https://colonieboncourt.ch/'
  }, {
    title: '(Google) Availability Calendar',
    description: 'A simple HTML calendar that is synchronized with a Google Calendar. It uses the Google Calendar API to check the days where there is an event and display them differently. You can see it in use on the "Colonie Boncourt" website.',
    img: CalIMG,
    tags: [
      'jQuery', 'Moment.js', 'Google API'
    ],
    code_link: 'https://github.com/schwdim/html-google-availability-calendar',
    demo_link: 'https://colonieboncourt.ch/#sct-dispo'
  }
]
