const portfolioItems = [
  {
    imgSrc: "https://www.elavayt.com/assets/Isotope-big-BCCm8djr.png",
    title: "Elavayt Wepage",
    client: "elavayt International",
    filter: "filter-web",
    category: "Web Page",
    info: "A full webpage is currently in development, using React JavaScript and SCSS for the frontend, Express.js for server-side logic, Redux for state management, and AWS for database and cloud storage. The goal of Elavayt is to streamline business discovery, making it easier for businesses to gain visibility and for customers to find the services they need.",
    url: "https://www.elavayt.com",
    date: "01 December, 2023",
  },
  {
    imgSrc: "https://www.ebizdirectory.elavayt.com/images/logo2.png",
    title: "EBiz Directory",
    client: "elavayt International",
    filter: "filter-app",
    category: "Mobile Web-App",
    info: "Ebiz Directory, a mobile web application that helps users find nearby businesses while offering business owners enhanced visibility. The platform is built using Next.js with TypeScript for strong performance and scalability, and SCSS for styling, ensuring a mobile-responsive user experience.",
    url: "https://www.ebizdirectory.elavayt.com/",
    date: "12 August, 2024",
  },
  {
    imgSrc: "assets/img/portfolio/Ether-Logo.png",
    title: "Ether Beta",
    client: "elavayt International",
    filter: "filter-web",
    info: "Ether is a platform aimed at connecting jobseekers with recruiters, offering tools for upskilling to enhance employability. It provides users with skills that improve their chances of being recruited. Currently in beta, the application offers a preview of the full platform, which is still under development. Built with ReactJS and mobile-responsive design, the beta version gives users insight into Ether's capabilities and future offerings.",
    category: "Web Page",
    url: "https://www.discover-ether.elavayt.com/",
    date: "01 July, 2023",
  },
  {
    imgSrc: "assets/img/portfolio/logo.png",
    title: "Eagle Eye Scanner",
    client: "elavayt International",
    filter: "filter-web",
    info: "Eagle Eye Scanner is a web application that was built using Next.js with TypeScript for strong performance and scalability, and SCSS for styling and Nodejs for server side using expressJS. Other libraries used include Recharts for data visualation. The web application serves as a platform for data collection",
    category: "Web Page",
    url: "https://eagle-eye.elavayt.com/",
    date: "01 December, 2024"
  },
  {
    imgSrc: "https://media.licdn.com/dms/image/v2/D4E0BAQFNZ-2qUGH2TA/company-logo_200_200/company-logo_200_200/0/1686604777400/thelearnlyapp_logo?e=2147483647&v=beta&t=UvmfYk7c8odvMgqSk4iIOTZCepXevZnwGDZ1Vnh3pNA",
    title: "Learnly Quiz Demo-App",
    client: "Learnly.io",
    filter: "filter-web",
    info: "A Quiz demo app for learnly. An educative platform built with VueJS and CSS3, with resposiveness for medium to small screens",
    category: "Web App",
    url: "https://gamified-learny-app.vercel.app/",
    date: "14 February, 2025"

  },
  {
      imgSrc: "assets/img/portfolio/agc-news.png",
      title: "AGC - News",
      client: "agcnews.net",
      filter: "filter-web",
      info: "AGC News is a news platform that provides the latest news and updates from around the world. The website is built using Next.js with TypeScript for strong performance and scalability, and TailwindCSS for styling, ensuring a responsive user experience across devices. Third party API integration for fetching stories. It features a clean and modern design, making it easy for users to navigate and access news articles.",
      category: "Web App",
      url: "https://agc-news.vercel.app/",
      date: "17 July, 2025"
    }
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
