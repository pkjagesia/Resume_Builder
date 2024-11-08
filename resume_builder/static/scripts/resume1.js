if(ht4 && !ht5 && !ht6){
    document.querySelector('#skill1').style.height = ht1 + '%';
    document.querySelector('#skill2').style.height = ht2 + '%';
    document.querySelector('#skill4').style.height = ht3 + '%';
    document.querySelector('#skill5').style.height = ht4 + '%';
    document.querySelector('.graph3').style.display = 'none';
    document.querySelector('.graph6').style.display = 'none';
    document.querySelector('#name1').innerText = skill1;
    document.querySelector('#name3').innerText = skill2;
    document.querySelector('#name4').innerText = skill3;
    document.querySelector('#name6').innerText = skill4;
}
else if(ht4 && ht5 && !ht6){
    document.querySelector('.container-3').style.justifyContent = 'space-evenly';
    document.querySelector('.container-4').style.justifyContent = 'space-evenly';
    document.querySelector('#skill1').style.height = ht1 + '%';
    document.querySelector('#skill2').style.height = ht2 + '%';
    document.querySelector('#skill3').style.height = ht3 + '%';
    document.querySelector('#skill4').style.height = ht4 + '%';
    document.querySelector('#skill5').style.height = ht5 + '%';
    document.querySelector('.graph6').style.display = 'none';
    document.querySelector('#name1').innerText = skill1;
    document.querySelector('#name2').innerText = skill2;
    document.querySelector('#name3').innerText = skill3;
    document.querySelector('#name4').innerText = skill4;
    document.querySelector('#name5').innerText = skill5;
    document.querySelector('#name6').style.display = 'none';
}
else if(ht4 && ht5 && ht6){
    document.querySelector('#skill1').style.height = ht1 + '%';
    document.querySelector('#skill2').style.height = ht2 + '%';
    document.querySelector('#skill3').style.height = ht3 + '%';
    document.querySelector('#skill4').style.height = ht4 + '%';
    document.querySelector('#skill5').style.height = ht5 + '%';
    document.querySelector('#skill6').style.height = ht6 + '%';
    document.querySelector('#name1').innerText = skill1;
    document.querySelector('#name2').innerText = skill2;
    document.querySelector('#name3').innerText = skill3;
    document.querySelector('#name4').innerText = skill4;
    document.querySelector('#name5').innerText = skill5;
    document.querySelector('#name6').innerText = skill6;
}
else{
    document.querySelector('.container-1').style.marginTop = '10%';
    document.querySelector('.container-3').style.display = 'none';
    document.querySelector('#skill1').style.height = ht1 + '%';
    document.querySelector('#skill2').style.height = ht2 + '%';
    document.querySelector('#skill3').style.height = ht3 + '%';
    document.querySelector('.graph4').style.display = 'none';
    document.querySelector('.graph5').style.display = 'none';
    document.querySelector('.graph6').style.display = 'none';
    document.querySelector('#name1').innerText = skill1;
    document.querySelector('#name2').innerText = skill2;
    document.querySelector('#name3').innerText = skill3;
}