(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  // Mapping portfolio contents

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

  const portfolioContainer = document.getElementById("portfolioContainer");

  portfolioItems.forEach((item, index) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = `col-lg-4 col-md-6 portfolio-item ${item.filter}`;

    portfolioItem.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${item.imgSrc}" class="img-fluid" alt="" />
        <span class="portfolio-title">
        <h4>
        ${item.title}
        </h4>
        </span>
        <div class="portfolio-links">
          <a href="portfolio-details.html?item=${index}">
            <i class="bx bx-link"></i>
          </a>
        </div>
      </div>
    `;

    portfolioContainer.appendChild(portfolioItem);
  });

  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    });
})();
