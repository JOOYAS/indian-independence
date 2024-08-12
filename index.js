const svgElement = document.getElementById("animated-svg");
let rotation = 0;

// for rotating the SVG
function animateSvg() {
    
    rotation += 0.4;
    if (rotation >= 360) rotation = 0;

    svgElement.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(animateSvg);
}

animateSvg();


//for carousal
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let index = 0;

function showNextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    const offset = -index * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 5000);

//just added here to get year
let current_year = new Date().getFullYear();

document.getElementById('independenceDayCount').innerText = `${(current_year - 1947) + 1}`

document.getElementById('abbr_id').title = `Counting from 1947, it will be the ${(current_year - 1947) + 1}th Independence Day.
August 15, ${current_year} will mark the ${current_year - 1947}th anniversary of India's independence`

document.getElementById('footer-text').innerHTML = `&copy;${current_year} A Sample Library. All rights reserved.`;


//code for creating the freedom fighters carousal
const freedomfightersData = [
    {
        name: "Mahatma Gandhi",
        imageSrc: "https://cdn.britannica.com/91/82291-050-EB7A276A/Mohandas-K-Gandhi-leader-Mahatma-Indian.jpg?w=400&h=300&c=crop",
        text: "Father of the Nation, led the non-violent struggle for independence."
    },
    {
        name: "Jawaharlal Nehru",
        imageSrc: "https://images.thequint.com/thequint/2016-05/683bb373-8459-403f-9020-b03070798898/nehru%20hero%201.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0",
        text: "First Prime Minister of India, played a key role in shaping modern India."
    },
    {
        name: "Subhash Chandra Bose",
        imageSrc: "https://www.oneindia.com/img/2017/08/netaji-subhash-chandra-bose-01-1501591576.jpg",
        text: "Leader of the Indian National Army, fought for freedom with military might."
    },
    {
        name: "Sardar Vallabhbhai Patel",
        imageSrc: "https://res.cloudinary.com/dkplc2mbj/image/upload/v1609410448/SVBP_7c12f687f8.jpg",
        text: "Iron Man of India, instrumental in integrating princely states into the Union."
    },
    {
        name: "Bhagat Singh",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bhagat_Singh_1929.jpg/640px-Bhagat_Singh_1929.jpg",
        text: "Revolutionary martyr, symbol of youth and resistance against colonial rule."
    },
    {
        name: "Lal Bahadur Shastri",
        imageSrc: "https://images.tv9hindi.com/wp-content/uploads/2023/10/lal-bahadur-shastri.jpeg",
        text: "Second Prime Minister of India, known for promoting the White Revolution."
    },
    {
        name: "Rani Lakshmibai",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/Rani_Lakshmibai_from_a_painting.jpg",
        text: "Queen of Jhansi, led resistance against British rule during the 1857 revolt."
    },
    {
        name: "Chandra Shekhar Azad",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Chandrasekhar_Azad.jpg",
        text: "Renowned revolutionary, committed to armed struggle for India's freedom."
    },
    {
        name: "Dr. B.R. Ambedkar",
        imageSrc: "https://www.hindustantimes.com/ht-img/img/2023/12/05/1600x900/Dr-BR-Ambedkar-believed-that-education--which-is-a_1681383254503_1701772961447.jpg",
        text: "Architect of the Indian Constitution, champion of social justice and equality."
    },
    {
        name: "Sarojini Naidu",
        imageSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrmaIAAf6EUJBvKe2JKrBS7prtst7UXHkjCmcdWybPZ81sGI6zuxr1zQ2EQq7RV5D9Yo8An2M9w4kLsMmCkHwaBp3Y4JglzE9qF6CUTzoi0HDpzjSi4jPEBj0gG5KIgYBOWpyPWm8Rj_RL/s0/Portrait+of+Sarojini+Naidu+-+Bombay+1946.jpg",
        text: "The Nightingale of India, prominent figure in the fight for women's rights."
    },
    {
        name: "Bal Gangadhar Tilak",
        imageSrc: "https://img.jagranjosh.com/images/2022/July/2372022/Compress_gangadhar_tilak.jpg",
        text: "Extremist leader, advocate for self-rule and Hindu revivalism."
    },
    {
        name: "Mangal Pandey",
        imageSrc: "https://magarticles.magzter.com/articles/10218/364044/5d4bf6cc1b03a/Mangal-Pandey-Main-Hoon-Hindustan-The-Man-Who-Knew-No-Fear.jpg",
        text: "Key figure in the 1857 rebellion, known for his role in the revolt against British rule."
    },
    {
        name: "Kasturba Gandhi",
        imageSrc: "https://res.cloudinary.com/dkplc2mbj/image/upload/v1615182257/kg_2fdeb88648.jpg",
        text: "Supportive partner of Mahatma Gandhi, active in the freedom struggle."
    },
    {
        name: "Jatin Das",
        imageSrc: "https://images.news18.com/ibnkhabar/uploads/2022/09/Jatin-Das-201-1200-900-Wikimedia-commons.jpg",
        text: "Revolutionary martyr, known for his hunger strike in the struggle for freedom."
    },
    {
        name: "Kanaiyalal Maneklal Munshi",
        imageSrc: "https://www.constitutionofindia.net/wp-content/uploads/2022/09/K-M-Munshi-2-Edited.jpg",
        text: "Freedom fighter and noted writer, contributed to Indian culture and politics."
    },
    {
        name: "Pattabhi Sitaramayya",
        imageSrc: "https://amritmahotsav.nic.in/writereaddata/Portal/Images/Pattabhi-Sitaramayya.png",
        text: "Congress leader and freedom fighter, played a role in the Quit India Movement."
    },
    {
        name: "Rajendra Prasad",
        imageSrc: "https://www.culturalindia.net/iliimages/Dr-Rajendra-Prasad-3_1.jpg",
        text: "First President of India, key figure in the freedom movement and nation-building."
    },
    {
        name: "Gopal Krishna Gokhale",
        imageSrc: "https://res.cloudinary.com/dkplc2mbj/image/upload/v1615182371/gkg_44acdd09dd.jpg",
        text: "Mentor to Gandhi, prominent leader in the early Indian nationalist movement."
    },
    {
        name: "Lala Lajpat Rai",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mahatma_Lala_Lajpat_Rai.jpg",
        text: "Leader of the struggle for independence, known for his work in the Punjab region."
    },
    {
        name: "Sukhdev Thapar",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Martyr_Sukhdev_Thapar.jpg/640px-Martyr_Sukhdev_Thapar.jpg",
        text: "Revolutionary and associate of Bhagat Singh, sacrificed life for the freedom struggle."
    },
    {
        name: "Unsung Heroes of Independence",
        imageSrc: "https://www.clearias.com/up/quit-india-movement-v5.jpg",
        text: "Countless brave souls contributed to India's freedom, yet many of their stories remain untold. Let us honor these unsung heroes whose sacrifices paved the way for our nation’s liberty."
    },
]

const carouselInner = document.querySelector('.carousel-inner');

freedomfightersData.forEach((fighter, index) => {
    console.log(fighter.text);
    const item = document.createElement('div');
    item.className = `carousel-item${index === 0 ? ' active' : ''}`;
    item.innerHTML = `
        <div class="blurred-bg-card-data row g-0 flex-md-row flex-column">
            <div class="col-md-4">
                <div class="image-container">
                    <img src="${fighter.imageSrc}" class="d-block w-100" alt="${fighter.name}">
                </div>
            </div>
            <div class="col-md-8 d-flex align-items-center">
                <div class="card-body text-primary">
                    <h5 class="fs-3 text-dark text-center">${fighter.name}</h5>
                    <p class="fs-5 text-alert text-md-center">${fighter.text}</p>
                </div>
            </div>
        </div>
    `;
    carouselInner.appendChild(item);
});