// body style
document.body.style.margin = "0"
document.body.style.background = "#0f1113"
document.body.style.fontFamily = "Arial, sans-serif"
document.body.style.color = "white"

// navbar
let navbar = document.createElement("header")
navbar.style.width = "100%"
navbar.style.height = "60px"
navbar.style.background = "#1b1d20"
navbar.style.display = "flex"
navbar.style.justifyContent = "space-between"
navbar.style.alignItems = "center"
navbar.style.padding = "0 40px"

// left nav links
let navLeft = document.createElement("div")
navLeft.style.display = "flex"
navLeft.style.alignItems = "center"

let link1 = document.createElement("a")
link1.textContent = "BLOG"
link1.style.marginRight = "25px"
link1.style.color = "#d7d7d7"
link1.style.textDecoration = "none"
link1.style.fontSize = "14px"

let link2 = document.createElement("a")
link2.textContent = "UPDATES"
link2.style.marginRight = "25px"
link2.style.color = "#d7d7d7"
link2.style.textDecoration = "none"
link2.style.fontSize = "14px"

let link3 = document.createElement("a")
link3.textContent = "RESOURCES"
link3.style.marginRight = "25px"
link3.style.color = "#d7d7d7"
link3.style.textDecoration = "none"
link3.style.fontSize = "14px"

let link4 = document.createElement("a")
link4.textContent = "COMMUNITY"
link4.style.marginRight = "25px"
link4.style.color = "#d7d7d7"
link4.style.textDecoration = "none"
link4.style.fontSize = "14px"

navLeft.append(link1, link2, link3, link4)

// right nav
let navRight = document.createElement("div")
navRight.style.display = "flex"
navRight.style.alignItems = "center"

// search box
let searchBox = document.createElement("div")
searchBox.style.background = "#2a2c2f"
searchBox.style.width = "140px"
searchBox.style.height = "35px"
searchBox.style.borderRadius = "4px"
searchBox.style.position = "relative"
searchBox.style.marginRight = "25px"

let searchIcon = document.createElement("img")
searchIcon.src = "img/SEARCH_GLASS.png"
searchIcon.style.width = "20px"
searchIcon.style.position = "absolute"
searchIcon.style.right = "10px"
searchIcon.style.top = "7px"

searchBox.append(searchIcon)

// language box
let langBox = document.createElement("div")
langBox.style.display = "flex"
langBox.style.alignItems = "center"
langBox.style.gap = "6px"
langBox.style.color = "#d7d7d7"
langBox.textContent = "English "

let langIcon = document.createElement("img")
langIcon.src = "img/dropdown_language.png"
langIcon.style.width = "14px"

langBox.append(langIcon)

// add nav right
navRight.append(searchBox, langBox)
navbar.append(navLeft, navRight)
document.body.append(navbar)

// main section
let section = document.createElement("section")
section.style.position = "relative"

let sectionImg = document.createElement("img")
sectionImg.src = "img/CSGO.jpg"
sectionImg.style.width = "100%"

section.append(sectionImg)
document.body.append(section)

// updates title
let updatesTitle = document.createElement("section")
updatesTitle.textContent = "MAJOR UPDATES"
updatesTitle.style.textAlign = "center"
updatesTitle.style.marginTop = "40px"
updatesTitle.style.fontSize = "22px"
updatesTitle.style.letterSpacing = "3px"
document.body.append(updatesTitle)

// slider
let updatesSlider = document.createElement("section")
updatesSlider.style.display = "flex"
updatesSlider.style.justifyContent = "center"
updatesSlider.style.alignItems = "center"
updatesSlider.style.marginTop = "25px"

let updatesCards = document.createElement("div")
updatesCards.style.display = "flex"
updatesCards.style.gap = "20px"

// cards
let card1 = document.createElement("img")
card1.src = "img/RIPTIDE.png"
card1.style.width = "260px"
card1.style.borderRadius = "6px"

let card2 = document.createElement("img")
card2.src = "img/SHATTERED_WEB.png"
card2.style.width = "260px"
card2.style.borderRadius = "6px"

let card3 = document.createElement("img")
card3.src = "img/BROKEN_FANG.png"
card3.style.width = "260px"
card3.style.borderRadius = "6px"

updatesCards.append(card1, card2, card3)
updatesSlider.append(updatesCards)
document.body.append(updatesSlider)

// first content block
let contentBlock1 = document.createElement("section")
contentBlock1.style.width = "85%"
contentBlock1.style.margin = "50px auto"

let h2_1 = document.createElement("h2")
h2_1.textContent = "PGL Antwerp 2022 Champions!"
h2_1.style.fontWeight = "400"

let champions1 = document.createElement("div")
champions1.style.display = "flex"
champions1.style.gap = "25px"
champions1.style.marginTop = "20px"

let champImg1 = document.createElement("img")
champImg1.src = "img/CHAMPIONS.png"
champImg1.style.width = "350px"
champImg1.style.borderRadius = "6px"

let contentP1 = document.createElement("p")
contentP1.innerHTML = `This weekend, thousands of screaming fans in Antwerp and millions of viewers around the
world witnessed the crowning of a new Major Champion. Congratulations to FaZe Clan
who proved to be an unstoppable force, taking the Grand Final 2-0. <br><br>
Today we’re releasing the champions autograph capsule, featuring autograph stickers in paper,
glitter, holo, and gold. Celebrate rain, karrigan, broky, ropz, and Twistzz by supporting them
in-style—50% of the proceeds are shared with the players.`
contentP1.style.lineHeight = "1.6em"

champions1.append(champImg1, contentP1)
contentBlock1.append(h2_1, champions1)
document.body.append(contentBlock1)

// second content block
let contentBlock2 = document.createElement("section")
contentBlock2.style.width = "85%"
contentBlock2.style.margin = "50px auto"

let h2_2 = document.createElement("h2")
h2_2.textContent = "The stage is set in Antwerp"
h2_2.style.fontWeight = "400"

let champions2 = document.createElement("div")
champions2.style.display = "flex"
champions2.style.gap = "25px"
champions2.style.marginTop = "20px"

let champImg2 = document.createElement("img")
champImg2.src = "img/CHAPOIN_STAGE.png"
champImg2.style.width = "350px"
champImg2.style.borderRadius = "6px"

let contentP2 = document.createElement("p")
contentP2.innerHTML = `The Legends stage was a brutal test, but eight teams survived and earned their place on the
main stage. Congratulations to Team Spirit, ENCE, Copenhagen Flames, FaZe, FURIA, Heroic,
Natus Vincere, and Ninjas in Pyjamas! The finals play out the rest of this weekend in front
of roaring crowds in Antwerp. Best of luck to all!`
contentP2.style.lineHeight = "1.6em"

champions2.append(champImg2, contentP2)
contentBlock2.append(h2_2, champions2)
document.body.append(contentBlock2)

// footer
let footer = document.createElement("footer")
footer.style.height = "70px"
footer.style.background = "#1b1d20"
footer.style.display = "flex"
footer.style.justifyContent = "center"
footer.style.alignItems = "center"
footer.style.gap = "40px"
footer.style.color = "#c5c5c5"
footer.style.marginTop = "40px"

// footer links
let f1 = document.createElement("a")
f1.textContent = "BLOG"
f1.style.color = "#c5c5c5"

let f2 = document.createElement("a")
f2.textContent = "UPDATES"
f2.style.color = "#c5c5c5"

let f3 = document.createElement("a")
f3.textContent = "RESOURCES"
f3.style.color = "#c5c5c5"

let f4 = document.createElement("a")
f4.textContent = "COMMUNITY"
f4.style.color = "#c5c5c5"

footer.append(f1, f2, f3, f4)
document.body.append(footer)
