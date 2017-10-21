'use strict';
document.addEventListener('DOMContentLoaded', function() {
    
     var menuElement = document.querySelector('.for-dropdown'); 
    var dropdownList = document.querySelector('.for-dropdown .dropdown');
    
    menuElement.addEventListener('mouseover', function() {
        dropdownList.style.display = 'block';
        
        
    });
    
    menuElement.addEventListener('mouseout', function(){
                                 dropdownList.style.display = 'none';
                                 });
    //zadanie 2
    
    var buttons = document.querySelectorAll('.btn.read-more');
    
      function showHide() {
        var textArea = this.previousElementSibling;
          
        if (textArea.style.display === 'none' || textArea.style.display === ''){
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {                                 
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }       
    }
    
   // buttons[0].addEventListener('click', showHide);
    
    for(var i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
    //zadanie 3
    var navigation = document.querySelector('nav.navbar');
    
    window.addEventListener('Scroll', function() {
    navigation.style.borderBottom = '1px solid #7f7f7f';
                                                
                            });   
    });  
    