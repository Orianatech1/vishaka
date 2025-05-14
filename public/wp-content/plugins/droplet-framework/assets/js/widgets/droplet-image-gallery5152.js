(function($, elementor) {
    'use strict';

        var WidgetImageGallery = function( $scope, $ ) {
            var $gallery_container = $scope.find('.droplet-image-gallery-masonry');
            $gallery_container.imagesLoaded( function() {
                $gallery_container.isotope({
                    itemSelector: '.droplet-gallery-item',
                    layoutMode: 'masonry',
                });
            });
            
            // Lightbox
            $(".droplet-image-gallery-popup").fancybox({
                animationDuration: 366,
                transitionDuration: 366,
                transitionEffect: "fade",
                animationEffect: "zoom-in-out",
                preventCaptionOverlap : true,
                infobar: false,
                buttons: [
                    "close"
                ]
            });

        };

    jQuery(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/droplet_image_gallery.default', WidgetImageGallery);
    });
    
}(jQuery, window.elementorFrontend));