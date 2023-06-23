const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerPadding: "50px",
    className: "center",
    draggable: true,
    swipe: true,
    touchMove:true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }},
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }},
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
        }},
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 2
        }},
    ]
};

export default settings;