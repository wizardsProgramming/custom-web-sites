

// Mobile


document.querySelectorAll('.change-background-buttons-container-mobile button').forEach((btn)=>{
    btn.addEventListener('click', ()=>{
            
            document.querySelector('main').style.backgroundImage = `url(../images/backgrounds/mobile/background${btn.innerText}.jpg)`;
            document.querySelectorAll('.change-background-buttons-container-mobile div').forEach((div)=>{
                div.classList.add('hide');
            })
    })
    });



    document.querySelectorAll('.background-change-link').forEach((link_)=>{
        link_.addEventListener('click', ()=>{
            let linkword = link_.innerText.toLowerCase();
            document.querySelector(`.btn-container-${linkword}`).classList.remove('hide');
        })
    })


    