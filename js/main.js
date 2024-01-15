(function($){
    "use strict";
    /* Inicializar nosso contador */
    $('.contar').counterUp({
        time:1000,
        delay:10
    });

    /* Função para fazer a rolagem até a seção desejada de maneira suave rolando até a seção */
    var $doc = $('html, body');
    $('.scroll-page').click(function(){
        $doc.animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },500);
        return false;
    });

    
})(jQuery);