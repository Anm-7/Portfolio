function mobile(){
  const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle.addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});
}
mobile();

const nav_items= ()=>{
  const nav_items_data = [
    { item_name: "الصفحة الرئيسية",
      class_name:"nav-link",
      href:"main"
    },
    // { item_name: "من أنا",
    //   class_name:"nav-link",
    //   href:"about"
    // },
    { item_name: "الخدمات",
      class_name:"nav-link",
      href:"features"
    },
    { item_name: "مهاراتي",
      class_name:"nav-link",
      href:"skills"
    },
    { item_name: "أعمالي",
      class_name:"nav-link",
      href:"works"
    },
  ];
  const nav_items_ul= document.getElementById("nav-items");
  nav_items_data.forEach(item=>{
    nav_items_ul.innerHTML+=`
    <li class="nav-item">
            <a href="#${item.href}" class="${item.class_name}"> ${item.item_name}</a>
          </li>
    `
  })
}
nav_items()

function features(){
  const features_imgs = [
    { image_title:"./features-imgs/web-design.svg",
      image: './features-imgs/feature.jpg',
      title: 'إنشاء مواقع الويب ',
      description:"  برمجة مواقع الويب المبتكرة والمتطورة التي تلبي احتياجات العملاء بشكل شامل"
    },
    { image_title:"./features-imgs/responsive.svg",
      image: './features-imgs/feature.jpg',
      title: ' موقع متجاوب ',
      description:" تصميم مواقع متجاوبة تقدم تصميمًا حديثًا واستجابة لجميع الأحجام المختلفة للشاشات، بما في ذلك الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية"
     },

    { image_title:"./features-imgs/articles.svg",
      image: './features-imgs/feature.jpg',
      title: 'ترجمة مقالات ',
      description:"نقدم خدمة ترجمة مقالات عالية الجودة بدقة واحترافية، مع الحرص على الحفاظ على معنى النص الأصلي وأسلوبة"
     },
    { image_title:"./features-imgs/graphics.svg",
      image: './features-imgs/feature.jpg',
      title: ' تصميم الجرافيكس ',
      description: " تقديم حلول إبداعية ومخصصة لتصميم الحروف البارزة التي تعزز هوية المحلات التجارية وتجذب الانتباه"
     },


  ];
  const features_list= document.getElementById("features-list");
  features_imgs.forEach(feature => {
   features_list.innerHTML += `
     <div class="feature">
            <div class="content">
              <img  src="${feature.image_title}" alt="${feature.title}" width="100" />
              <h3> ${feature.title} </h3>
              <p>
               ${feature.description}
              </p>
            </div>
            <img class="background-feature" src="${feature.image}" alt="${feature.title}" />
          </div>
  `;

});
}
features()


function skills(){
  const skills_imgs=[
   {
     image:"./skills-imgs/html.svg",
     title:"html"
   },
   {
     image:"./skills-imgs/css.svg",
     title:"css"
   },
   {
     image:"./skills-imgs/js.svg",
     title:"js"
   },
   {
     image:"./skills-imgs/bootstrap.svg",
     title:"bootstrap"
   },
   {
     image:"./skills-imgs/sass.svg",
     title:"sass"
   },
   {
     image:"./skills-imgs/react.svg",
     title:"react js"
   },
   {
     image:"./skills-imgs/next-js.svg",
     title:"next js"
   },
  ]
  const skills_container= document.getElementById("skills-container")
  skills_imgs.forEach(skill=>{
    skills_container.innerHTML+=`
     <div class="skill">
            <img src="${skill.image}" alt="${skill.image}" width="100" height="100">
            <h4>${skill.title}</h4>
        </div>
    `
  })
}
skills()


function works() {
  const works_imgs = [
      { image: './works-imgs/gift.svg', title: 'متجر إلكتروني للهدايا', url: "https://anm-7.github.io/GIFTSHOP/", category: "pure js" },
      { image: './works-imgs/shoes.svg', title: 'متجر إلكتروني للأحذية', url: "https://anm-7.github.io/-Shoes-Store/", category: "pure js" },
      { image: './works-imgs/todo.svg', title: 'قائمة المهام', url: "https://anm-7.github.io/TODOLIST/", category: "pure js" },
      { image: './works-imgs/products.svg', title: 'متجر إلكتروني مصغر', url: "https://anm-7.github.io/GIFTSHOP/", category: "api" },
      { image: './works-imgs/billboard.svg', title: 'أداء للدعاية والإعلان', url: "https://adaa-majed.github.io/Advertising-adaa/", category: "pure js" },
      { image: './works-imgs/calculator.svg', title: 'الحاسبة', url: "https://anmahma-d.github.io/calculator/", category: "pure js" },
      { image: './works-imgs/Brosted.jpg', title: 'تصميم جرافيكي', category: "graphics" },
      { image: './works-imgs/restaurant.jpg', title: 'تصميم جرافيكي', category: "graphics" },
      { image: './works-imgs/restaurant2.jpg', title: 'تصميم جرافيكي', category: "graphics" },
  ];

  const detail_list = document.getElementById("detail_list");
  const categories = document.querySelectorAll(".categories li");

  // Function to render works based on the selected category
  function renderWorks(filterCategory) {
      detail_list.innerHTML = ""; // Clear existing items

      works_imgs.forEach(work => {
          // Show all categories at start and based on selected item
         if (filterCategory === "all" || work.category.toLowerCase() === filterCategory.toLowerCase()) {
    const work_card = `
        <div class="detail ${work.category.toLowerCase()}">
            <img loading="lazy" src="${work.image}" alt="${work.title}" style="width: ${work.category === "graphics" ? '100%' : '100px'}; height: auto; border-radius: ${work.category === "graphics" ? '10px' : '0'};">
            <h3>${work.title}</h3>
            ${work.url ? `<button><a href="${work.url}" target="_blank">رؤية المشروع</a></button>` : ''}
        </div>
    `;
    detail_list.innerHTML += work_card;
}
      });
  }

  // Show all works at the start
  renderWorks("all");

  // Show works based on selected item
  categories.forEach(cate => {
      cate.addEventListener("click", function() {
          // Remove active class from all categories
          categories.forEach(item => item.classList.remove("active"));
          // Add active class to the clicked category
          cate.classList.add("active");
          renderWorks(cate.textContent.toLowerCase()); // Render works based on the selected category
      });
  });
}
works()

function scrollTop(){
  const scrollButton = document.getElementById("scrollButton");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.onclick=()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

}
scrollTop()
