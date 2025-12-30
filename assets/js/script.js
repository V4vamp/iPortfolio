const portfolioItems = [
  {
    imgSrc: "assets/img/portfolio/elavayt-view.png",
    title: "Elavayt Wepage",
    client: "elavayt International",
    filter: "filter-web",
    category: "Web Page",
    info: "A full webpage currently in development, using React JavaScript and SCSS for the frontend, Express.js for server-side logic, Redux for state management, and AWS for database and cloud storage. The goal of Elavayt is to streamline business discovery, making it easier for businesses to gain visibility and for customers to find the services they need.",
    url: "https://www.elavayt.com",
    date: "01 December, 2023",
  },
  {
    imgSrc: "assets/img/portfolio/laiflyne-view.png",
    title: "Laiflyne",
    client: "elavayt International",
    filter: "filter-app",
    category: "Mobile Web-App",
    info: "Laiflyne is a web application that helps users manage lifestyle-related health issues by connecting them with qualified professionals for guidance and support. My primary role on the team was as a frontend developer, where I focused on building intuitive and responsive user interfaces. In situations where the backend developer was unavailable, I also contributed to backend tasks to ensure the application functioned seamlessly.",
    url: "https://www.laiflyne.com/",
    date: "12 August, 2024",
  },
  {
    imgSrc: "assets/img/portfolio/ether-view.png",
    title: "Ether Beta",
    client: "elavayt International",
    filter: "filter-web",
    info: "Ether is a platform aimed at connecting jobseekers with recruiters, offering tools for upskilling to enhance employability. It provides users with skills that improve their chances of being recruited. Currently in beta, the application offers a preview of the full platform, which is still under development. Built with ReactJS and mobile-responsive design, the beta version gives users insight into Ether's capabilities and future offerings.",
    category: "Web Page",
    url: "https://www.discover-ether.elavayt.com/",
    date: "01 July, 2023",
  },
  {
    imgSrc: "assets/img/portfolio/eagle-view.png",
    title: "Eagle Eye Scanner",
    client: "elavayt International",
    filter: "filter-web",
    info: "Eagle Eye Data Scanner is a web application I independently designed and built to collect, capture, analyze, and visualize data from various parastatals across all 36 states of Nigeria. The platform provides structured insights at state, local government, and ward levels, enabling efficient data exploration and informed decision-making. The application was developed using Next.js and TypeScript, with SCSS for scalable and maintainable styling, ensuring performance, reliability, and a clean user experience.",
    category: "Web Page",
    url: "https://eagle-eye.elavayt.com/",
    date: "01 December, 2024",
  },
  {
    imgSrc: "assets/img/portfolio/learnly-view.png",
    title: "Learnly Quiz Demo-App",
    client: "Learnly.io",
    filter: "filter-web",
    info: "A Quiz demo app for learnly. An educative platform built with VueJS and CSS3, with resposiveness for medium to small screens",
    category: "Web App",
    url: "https://gamified-learny-app.vercel.app/",
    date: "14 February, 2025",
  },
  {
    imgSrc: "assets/img/portfolio/agc-view.png",
    title: "AGC - News Platform",
    client: "agcnews.net",
    filter: "filter-web",
    info: "AGC News is a news platform that provides the latest news and updates from around the world. The website is built using Next.js with TypeScript for strong performance and scalability, and TailwindCSS for styling, ensuring a responsive user experience across devices. Third party API integration for fetching stories. It features a clean and modern design, making it easy for users to navigate and access news articles.",
    category: "Web App",
    url: "https://agc-news.vercel.app/",
    date: "17 July, 2025",
  },
  {
    imgSrc: "assets/img/portfolio/eco-view.png",
    title: "EcoBazaar e-commerce",
    client: "Eco Bazaar",
    filter: "filter-web",
    info: "Eco Bazaar is an e-commerce shopping platform developed as a personal project to explore and strengthen my interest in Tailwind CSS. Built with TypeScript and utilizing localStorage for data persistence, the application is fully responsive and optimized for seamless use across multiple devices.",
    category: "Web/Mobile App",
    url: "https://bazar-shopper.vercel.app/",
    date: "25 August, 2025",
  },
  {
    imgSrc: "assets/img/portfolio/mobse-view.png",
    title: "Niger State; Min. of Education",
    client: "agcnews.net",
    filter: "filter-web",
    info: "A web application developed for the State Ministry of Basic and Secondary Education. Built using Next.js with TypeScript and SCSS for the frontend, and Express.js for the server-side architecture. The platform is currently under active development and undergoing client-driven refinements.",
    category: "Web App",
    url: "https://www.mobse.ni.gov.ng/",
    date: "17 July, 2025",
  },
];

const portfolioDetails = document.getElementById("portfolioDetails");

// Function to get query parameter by name
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const itemIndex = getQueryParameter("item");

if (itemIndex !== null) {
  const item = portfolioItems[itemIndex];
  portfolioDetails.innerHTML = `
      <div class="col-lg-8">
              <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">
                  <div class="swiper-slide">
                    <img
                      src=${item.imgSrc}
                      alt=""
                    />
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: ${item.category}</li>
                  <li><strong>Client</strong>: ${item.client}</li>
                  <li><strong>Project date</strong>: ${item.date}</li>
                  <li>
                    <strong>Project URL</strong>:
                    <a href=${item.url}>Visit website</a>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2>${item.title}</h2>
                <p>
                  ${item.info}
                </p>
              </div>
            </div>
    `;
} else {
  portfolioDetails.innerHTML = "<p>No details available.</p>";
}
