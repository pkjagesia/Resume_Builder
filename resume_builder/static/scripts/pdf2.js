window.onload = function() {
    
    document.getElementById("download")
    .addEventListener("click" ,()=> {
        
        const resume = document.getElementById("resume");
        console.log(window); 
        console.log(resume);
        var opt = {
            margin : 1,
            filename: 'MyResume.pdf',
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: { width: 900 },
            jsPDF: { unit: 'mm', format: 'letter' , orientation: 'portrait' },
            pagebreak: {avoid: 'tr'}
        };
        html2pdf().from(resume).set(opt).save();
    })
}
