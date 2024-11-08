skills = document.querySelectorAll('.bar');

for(skill of skills){
    skill.children[0].style.width = skill.children[0].dataset["percent"] + '%';
}