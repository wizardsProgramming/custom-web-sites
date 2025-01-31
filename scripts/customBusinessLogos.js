
// setting up the business logos

const businessLogoSrcs = [
    new Project('dragonHero', '../images/businessLogos/logo1.jpg'),
    new Project('VenomAsync', '../images/businessLogos/logo2.jpg'),
    new Project('GokuAsync2', '../images/businessLogos/logo3.jpg'),
    new Project('VenomAsync2','../images/businessLogos/logo4.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo5.jpg'),
    new Project('DragonHeroNoBG','../images/businessLogos/logo6.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo7.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo8.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo9.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo10.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo11.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo12.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo13.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo14.jpg'),
    new Project('GokuAsyncNoBG','../images/businessLogos/logo15.jpg'),
];

// inserting the images into the frontend when the business logos tab is clicked
const businessLogoInsertionContainer = document.querySelector('.custom-business-logo-insertion');


    const businessLogoInsertionContainerImages = document.querySelectorAll('.custom-business-logo-insertion img');

    businessLogoSrcs.forEach((img)=>{
        const imgElement = document.createElement('img');
        imgElement.classList.add('business-logo');
        imgElement.src = img.src;
        imgElement.alt = img.name;
        businessLogoInsertionContainer.appendChild(imgElement);
    })
