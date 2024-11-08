// window.onload = function() {
    
//     document.getElementById("download")
//     .addEventListener("click" ,()=> {
        
//         const resume = document.getElementById("resume");
//         console.log(window); 
//         console.log(resume);
//         var opt = {
//             margin : 1,
//             filename: 'MyResume.pdf',
//             image: { type: 'jpeg', quality: 0.95 },
//             html2canvas: { width: 920 },
//             jsPDF: { unit: 'mm', format: 'letter' , orientation: 'portrait' },
//         };
//         html2pdf().from(resume).set(opt).save();
//     })
// }

(function () {  
    var  
     form = $('#resume'),  
     cache_width = form.width(),  
     a4 = [595.28, 841.89]; // for a4 size paper width and height  

    $('#download').on('click', function () {  
        $('body').scrollTop(0);  
        createPDF();  
    });  
    //create pdf  
    function createPDF() {  
        getCanvas().then(function (canvas) {  
            var  
             img = canvas.toDataURL("image/png"),  
             doc = new jsPDF({  
                 unit: 'px',  
                 format: 'a4'  
             });  
            doc.addImage(img, 'JPEG', 20, 20);  
            doc.save('Bhavdip-html-to-pdf.pdf');  
            form.width(cache_width);  
        });  
    }  

    // create canvas object  
    function getCanvas() {  
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');  
        return html2canvas(form, {  
            imageTimeout: 2000,  
            removeContainer: true  
        });  
    }  

}());  