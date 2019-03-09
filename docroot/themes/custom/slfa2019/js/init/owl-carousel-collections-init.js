(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselCollections = {
    attach: function (context, settings) {
      $(context).find('.mt-carousel-collections').once('mtowlCarouselCollectionsInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:2,
            },
            480:{
              items:2,
            },
            768:{
              items:2,
            },
            992:{
              items:2,
            },
            1200:{
              items:4,
            },
            1680:{
              items:4,
            }
          },
          autoplay: drupalSettings.slfa2019.owlCarouselCollectionsInit.owlCollectionsAutoPlay,
          autoplayTimeout: drupalSettings.slfa2019.owlCarouselCollectionsInit.owlCollectionsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
