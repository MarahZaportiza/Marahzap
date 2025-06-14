const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbtns");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});




const selectItemForm = document.querySelector(".SelectItemArea");
const exitbtn = document.querySelector(".selectExitbtn");
const itemboxes = document.querySelectorAll(".itembox");

itemboxes.forEach(box => {
  box.addEventListener("click", () => {
    selectItemForm.style.display = "flex";
  });
});

exitbtn.addEventListener("click", () => {
    selectItemForm.style.display = "none";
});



const itemBoxes = document.querySelectorAll('.itembox');
const selectItem = document.getElementById('selectitem');

const selectName = document.getElementById('selectName');
const selectPrice = document.getElementById('selectPrice');
const selectDescription = document.getElementById('selectDescription');
const selectImage = document.getElementById('selectImage');
const closeSelectBtn = document.getElementById('closeSelectBtn');

itemBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const name = box.getAttribute('data-name');
        const price = box.getAttribute('data-price');
        const desc = box.getAttribute('data-description');
        const image = box.getAttribute('data-image');

        selectName.textContent = name;
        selectPrice.textContent = price;
        selectDescription.textContent = desc;
        selectImage.src = image;

        selectItem.classList.remove('hidden');
    });
});

closeSelectBtn.addEventListener('click', () => {
    selectItem.classList.add('hidden');
});





const SidebarArea = document.querySelector(".asideareaItem");
const exitbtn2 = document.querySelector(".selectExitbtn2");
const Shopbtn = document.querySelector("#Shopbutton");

Shopbtn.addEventListener("click", () => {
    SidebarArea.style.display = "flex";
    Shopbtn.style.backgroundColor = "#ffdeb9";
});


exitbtn2.addEventListener("click", () => {
    SidebarArea.style.display = "none";
    Shopbtn.style.backgroundColor = "transparent";
});