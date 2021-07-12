jQuery(document).ready(function($) {


    /*
    |--------------------------------------------------------------------------
    | Global myTheme Obj / Variable Declaration
    |--------------------------------------------------------------------------
    |
    |
    |
    */
    
        var myTheme = window.myTheme || {},
        $win = $( window );
        
    
    
    /*
    |--------------------------------------------------------------------------
    | isotope
    |--------------------------------------------------------------------------
    |
    |
    |
    */		
    
        myTheme.Isotope = function () {
        
            
            
            
            
            // 2 column layout
            var isotopeContainer3 = $('.isotopeContainer3');
            if( !isotopeContainer3.length || !jQuery().isotope ) return;
            $win.load(function(){
                isotopeContainer3.isotope({
                    itemSelector: '.isotopeSelector'
                });
            $('.isotopeFilters3').on( 'click', 'a', function(e) {
                    $('.isotopeFilters3').find('.active').removeClass('active');
                    $(this).parent().addClass('active');
                    var filterValue = $(this).attr('data-filter');
                    isotopeContainer3.isotope({ filter: filterValue });
                    e.preventDefault();
                });
            });
            
            
        
        };
        
        
    
    /*
    |--------------------------------------------------------------------------
    | Fancybox
    |--------------------------------------------------------------------------
    |
    |
    |
    */		
    
        myTheme.Fancybox = function () {
            
            $(".fancybox-pop").fancybox({
                maxWidth	: 900,
                maxHeight	: 700,
                fitToView	: true,
                width		: '80%',
                height		: '80%',
                autoSize	: false,
                closeClick	: false,
                openEffect	: 'elastic',
                closeEffect	: 'none'
            });
        
        };
        
            
        
        
    /*
    |--------------------------------------------------------------------------
    | Functions Initializers
    |--------------------------------------------------------------------------
    |
    |
    |
    */
        
        myTheme.Isotope();
        myTheme.Fancybox();
        
        
        $("#resume-download").click(function () {
            var url = "Resume.pdf";
     
                //Create XMLHTTP Request.
                var req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.responseType = "blob";
                req.onload = function () {
                    //Convert the Byte Data to BLOB object.
                    var blob = new Blob([req.response], { type: "application/octetstream" });
     
                    //Check the Browser type and download the File.
                    var isIE = false || !!document.documentMode;
                    if (isIE) {
                        window.navigator.msSaveBlob(blob, fileName);
                    } else {
                        var url = window.URL || window.webkitURL;
                        link = url.createObjectURL(blob);
                        var a = document.createElement("a");
                        a.setAttribute("download", "Resume.pdf");
                        a.setAttribute("href", link);
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                };
                req.send();
        });
    });
    
    
    
    