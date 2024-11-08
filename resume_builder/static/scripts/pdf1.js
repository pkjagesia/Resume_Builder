window.onload = function() {
    
    document.getElementById("download")
    .addEventListener("click" ,()=> {
        
        const resume = document.getElementById("resume");
        console.log(window); 
        console.log(resume);
        // html2pdf().from(resume).save();
        var opt = {
            margin : 1,
            filename: 'MyResume.pdf',
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: { width: 900 },
            jsPDF: { unit: 'mm', format: 'letter' , orientation: 'portrait' },
            pagebreak: {avoid: 'tr'}
        };
        // html2pdf().from(resumepart2).set(opt).save();
         
        html2pdf().from(resumepart1).set(opt).toPdf().get('pdf').then(function (pdf) {
            pdf.addPage();
        }).from(resumepart2).set(opt).toContainer().toCanvas().toPdf().save();
    })
}
// 1:width: 900, height: 2200
// 2:width:900, height:975
// 4:width: 900, height: 2000