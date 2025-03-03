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
      imgSrc: "https://www.elavayt.com/assets/Isotope-big-BCCm8djr.png",
      title: "Elavayt Wepage",
      client: "elavayt International",
      filter: "filter-web",
      category: "Web Page",
      info: "A full webpage currently in development, using React JavaScript and SCSS for the frontend, Express.js for server-side logic, Redux for state management, and AWS for database and cloud storage. The goal of Elavayt is to streamline business discovery, making it easier for businesses to gain visibility and for customers to find the services they need.",
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
    }
  ];

  const portfolioContainer = document.getElementById("portfolioContainer");

  portfolioItems.forEach((item, index) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = `col-lg-4 col-md-6 portfolio-item ${item.filter}`;

    portfolioItem.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${item.imgSrc}" class="img-fluid" alt="" />
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

      const formData =  {
          name: document.getElementById("name").value,
          email:  document.getElementById("email").value,
          subject:  document.getElementById("subject").value,
          message:  document.getElementById("message").value,
        };

        const response = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message.');
        }
    });
})();
