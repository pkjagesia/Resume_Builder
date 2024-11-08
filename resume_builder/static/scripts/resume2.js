skills = document.querySelectorAll('.skills-prog ul li');

for(skill of skills){
    skill.children[1].children[0].style.width = skill.dataset["percent"] + '%';
}

if(skills.length === 3){
    skills.forEach((skill) =>{
        skill.style.padding = '20px';
    })
}

if(skills.length === 4){

    document.querySelector('.skills-prog ul').style.marginTop = '5%';
    skills.forEach((skill) =>{
        skill.style.padding = '20px';
    })
}

if(skills.length === 5){

    document.querySelector('.skills-prog ul').style.marginTop = '0';
    skills.forEach((skill) =>{
        skill.style.padding = '15px';
    })
}

if(skills.length === 6){

    document.querySelector('.skills-prog ul').style.marginTop = '0';
    skills.forEach((skill) =>{
        skill.style.padding = '10px';
    })
}