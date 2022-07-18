document.querySelector("header_Right")
let search = document.querySelector(".search")
let img = document.querySelector(".img")

img.addEventListener('click', function () {
    search.classList.toggle('toggle')
})

let section_first_btn = document.querySelector(".section_first_btn")
let section_first_inp = document.querySelectorAll(".section_first_inp")
console.log(section_first_inp)
document.addEventListener("keypress", function () {
    if (section_first_inp[0].value.length >= 6 && section_first_inp[1].value.length >= 6) {
        section_first_btn.removeAttribute("disabled");//შლის html-ში მინიჭებულ disabled ატრიბუტს
        section_first_btn.style.backgroundColor = "red"
    }

})
section_first_btn.addEventListener("click", function () {
    alert("You have successfully logged in")
    section_first_inp[0].value = ''
    section_first_inp[1].value = ''
})
// let section_second_box1 = document.querySelector(".section_second_box1")
// let im=document.querySelector(".im")
// im.addEventListener("click", function myFunction(){
//     let box = document.createElement("div");
//     box.classList.add('box')
//     let p = document.createElement("p");
//     box.appendChild(p)
//     hp.innerHTML = 'R. SEBASTIAN BENNETT was born in New York City and grew up in Southern California. He attended Columbia University' 
//     // img.setAttribute("src", )
//     // box.appendChild(img)
// } )
let sectionCardsData = [
    {
        img: './Image/Oval (5).png',
        txt1: '"Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: 'Shirline Dungey',
        txt3: 'Apple'
    },
    {
        img: './Image/st.png',
        txt1: '"Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri."',
        txt2: 'Hector Mariano',
        txt3: 'Google'
    },
    {
        img: './Image/bo.png',
        txt1: '"His dolorem habemus mandamus et, eius ponderum lorem molestiae ne, esse vulputate definitiones iracundia bonorum graecis convenire assum novum eu."',
        txt2: 'Tiontay Carroll',
        txt3: 'Facebook'
    },
    {
        img: './Image/Oval (9).png',
        txt1: '"Quidam officiis similique indoctum efficiendi platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: 'Hector Mariano',
        txt3: 'Google'
    },
    {
        img: './Image/Oval (4).png',
        txt1: '"Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: 'Shirline Dungey',
        txt3: 'Apple'
    },
    {
        img: './Image/44.png',
        txt1: '"Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri."',
        txt2: 'Hector Mariano',
        txt3: 'Google'
    },
    {
        img: './Image/40.png',
        txt1: '"His dolorem habemus mandamus et, eius ponderum lorem molestiae ne, esse vulputate definitiones iracundia bonorum graecis convenire assum novum eu."',
        txt2: 'Tiontay Carroll',
        txt3: 'Facebook'
    },
]

let section_third_box = document.querySelector(".section_third_box")
sectionCardsData.map((item) => {
    console.log(item)
    let box = document.createElement("div");
    box.classList.add('box')
    section_third_box.appendChild(box)
    let box_box_p = document.createElement("div");
    box_box_p.classList.add('box_box_p')
    box.appendChild(box_box_p)
    let p1 = document.createElement("p");
    box.appendChild(p1)
    p1.innerHTML = item.txt1;
    let img = document.createElement("img");
    img.setAttribute("src", item.img)
    box.appendChild(img);
    let box_box = document.createElement("div");
    box_box.classList.add('box_box')
    box.appendChild(box_box)
    let h3 = document.createElement("h3");
    box_box.appendChild(h3)
    h3.innerHTML = item.txt2;
    let h4 = document.createElement("h4");
    box_box.appendChild(h4)
    h4.innerHTML = item.txt3;
})
window.addEventListener('scroll', function () {
    if (section_third_box.getBoundingClientRect().y < 1150) {
        section_third_box.style.transform = 'translateX(0px)';
    }
})

