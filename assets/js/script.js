const portfolioItems = [
  {
    imgSrc: "assets/img/portfolio/portfolio-1.jpg",
    title: "Elavayt Wepage",
    client: "elavayt International",
    filter: "filter-web",
    category: "Web Page",
    info: "Elavayt is a platform that helps users discover and connect with local businesses. Its full webpage is currently in development, using React JavaScript and SCSS for the frontend, Express.js for server-side logic, Redux for state management, and AWS for database and cloud storage. The goal of Elavayt is to streamline business discovery, making it easier for businesses to gain visibility and for customers to find the services they need.",
    url: "https://www.elavayt.com",
    date: "01 December, 2023"
},
  {
    imgSrc: "assets/img/portfolio/portfolio-3.jpg",
    title: "EBiz Directory",
    client: "elavayt International",
    filter: "filter-app",
    category: "Mobile Web-App",
    info: "Ebiz Directory, a mobile web application that helps users find nearby businesses while offering business owners enhanced visibility. The platform is built using **Next.js with TypeScript** for strong performance and scalability, and **SCSS** for styling, ensuring a mobile-responsive user experience.",
    url: "https://www.ebizdirectory.elavayt.com/",
    date: "12 August, 2024"
  },
  {
    imgSrc: "assets/img/portfolio/portfolio-9.jpg",
    title: "Ether Beta",
    client: "elavayt International",
    filter: "filter-web",
    info: "Ether is a platform aimed at connecting jobseekers with recruiters, offering tools for upskilling to enhance employability. It provides users with skills that improve their chances of being recruited. Currently in beta, the application offers a preview of the full platform, which is still under development. Built with ReactJS and mobile-responsive design, the beta version gives users insight into Ether's capabilities and future offerings.",
    category: "Web Page",
    url: "https://www.discover-ether.elavayt.com/",
    date: "01 July, 2023"
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
                      src="assets/img/portfolio/portfolio-details-1.jpg"
                      alt=""
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="assets/img/portfolio/portfolio-details-2.jpg"
                      alt=""
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="assets/img/portfolio/portfolio-details-3.jpg"
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
                  <li><strong>Project date</strong>: 01 December, 2023</li>
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
