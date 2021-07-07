/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
  function Mensaje()
{
    
    alert('Se ha ingresado tu solicitud, se comunicarán contigo por correo');
    
}
  function validacion()
{
	nom= document.getElementById('nombre').value;

	if(nom == null || nom.length==0 || /^\s+$/.test(nom))
	{
                    alert('Error.. debe ingresar un nombre');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
	}
	else {
                    alert("Se ha enviado el formulario, se contactarán contigo por correo .");
	}
	return true;    

	r.element.form.submit();
                
}

function validacionn()
            {
                nom= document.getElementById('nombre').value;
                ed = document.getElementById('edad').value; 
				ubicacion = document.getElementById('opciones').selectedIndex;
                fono = document.getElementById('telefono').value;
				cue = document.getElementById('cuentanos').value;

                if(nom == null || nom.length==0 || /^\s+$/.test(nom))
                {
                    alert('Error.. debe ingresar un nombre');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
                }
                
                if(isNaN(ed) || ed.length == 0)
                 {
                    alert('Error...debe ingresar una edad válida');
                    document.getElementById('edad').value="";
                    document.datos.ed.focus();
                    return false;
                }

                if (ubicacion == null || ubicacion == 0)
                {
                    alert('Seleccione un país');
                    document.datos.opciones.focus();
                    return false;
                }

                if(!(/^\d{9}$/.test(fono)) )
                {
                    alert('Error...debe ingresar un teléfono válido');
                    document.getElementById('telefono').value="";
                    document.datos.fono.focus();
                    return false;
                } 
				if(cue == null || cue.length==0 || /^\s+$/.test(cue))
                {
                    alert('Error... te faltan datos por ingresar');
                    document.getElementById('cuentanos').value="";
                    document.datos.cue.focus();
                    return false;
                }
				else {
							alert("Se ha enviado el formulario, se contactarán contigo por Telefono .");
					}				
                return true;      

                
            }
			
function validacion2()
            {
                nom= document.getElementById('nombre').value;
                ed = document.getElementById('edad').value; 
				ubicacion = document.getElementById('opciones').selectedIndex;
                fono = document.getElementById('telefono').value;
				sinto = document.getElementById('sintomas').value;

                if(nom == null || nom.length==0 || /^\s+$/.test(nom))
                {
                    alert('Error.. debe ingresar un nombre');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
                }
                
                if(isNaN(ed) || ed.length == 0)
                 {
                    alert('Error...debe ingresar una edad válida');
                    document.getElementById('edad').value="";
                    document.datos.ed.focus();
                    return false;
                }

                if (ubicacion == null || ubicacion == 0)
                {
                    alert('Seleccione una región');
                    document.datos.opciones.focus();
                    return false;
                }

                if(!(/^\d{9}$/.test(fono)) )
                {
                    alert('Error...debe ingresar un teléfono válido');
                    document.getElementById('telefono').value="";
                    document.datos.fono.focus();
                    return false;
                } 
				if(sinto == null || sinto.length==0 || /^\s+$/.test(sinto))
                {
                    alert('Error... te faltan datos por ingresar');
                    document.getElementById('sintomas').value="";
                    document.datos.cue.focus();
                    return false;
                }
				
				else {
							alert("Se ha enviado el formulario, se contactarán contigo por correo .");
					}				
                return true;      

                
            }

			

	


