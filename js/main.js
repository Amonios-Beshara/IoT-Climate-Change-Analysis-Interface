        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://capstone-project-62f29-default-rtdb.firebaseio.com/";
        import { getDatabase, ref, onChildChanged, onChildAdded, onValue, child, get } from "https://capstone-project-62f29-default-rtdb.firebaseio.com/";
        
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyD9Osd32VXQq96ztpwg5Xw8UoY9WRR-1Rs",
            authDomain: "capstone-project-62f29.firebaseapp.com",
            databaseURL: "https://capstone-project-62f29-default-rtdb.firebaseio.com",
            projectId: "capstone-project-62f29",
            storageBucket: "capstone-project-62f29.appspot.com",
            messagingSenderId: "583662606867",
            appId: "1:583662606867:web:4972cae8361a607609fde6",
            measurementId: "G-7QB9MKHHCQ"
        };
        
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app, "https://capstone-project-62f29-default-rtdb.firebaseio.com/");
    const parent = ref(db, "/");

    onValue(testPlanResultsRef), () => {
        console.log("Firebase Update!");
        // fetch("http://127.0.0.1:5000/")
        fetch("https://capstone-project-62f29-default-rtdb.firebaseio.com/")
        .then((response) => response.text())
        .then((dataSource) => {
            if (dataSource) {
let dataSourceParsed = JSON.parse(dataSource);
            let graph1 = document.getElementById("graph-1");}

              // Graph 1 => "Water Temperature VS Evaporation Rate"
            let tempVsEvapRateJSON = JSON.parse(
                dataSourceParsed["tempVsEvapRateJSON"]
            );
            document.querySelector("#graph-1 p").style.display = "none";
            Plotly.react(
                graph1,
                tempVsEvapRateJSON.data,
                tempVsEvapRateJSON.layout,
                { responsive: true }
            );
}
else {
            console.log("No Data Yet !!");
            })
(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
})(jQuery)}