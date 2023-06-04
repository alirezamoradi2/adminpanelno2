$(document).ready(() => {

    const removeSidebarClass = () => {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-md-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
    }

    $("#sidebar-toggle-hide").click(() => {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({ width: "100%" }, 300);
        setTimeout(() => {
            removeSidebarClass();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');
        }, 300);
    })

    $("#sidebar-toggle-show").click(() => {
        $('#sidebar').fadeIn(300);
        $('#main-body').animate({ width: "calc(100% - 14rem)" }, 300);
        setTimeout(() => {
            removeSidebarClass();
            $('#sidebar-toggle-hide').removeClass('d-none');
            $('#sidebar-toggle-show').addClass('d-none');
        }, 300);
    })

    $('#menu-toggle').click(() => {
        $('#body-header').toggle(200);
    })

    $('#search-toggle').click(() => {
        $('#search-toggle').removeClass('d-md-inline');
        $('#search-area').addClass('d-md-inline');
        $('#search-input').animate({ width: "12rem" }, 300);
    })

    $('#search-area-hide').click(() => {
        $('#search-input').animate({ width: "0" }, 300);
        setTimeout(() => {
            $('#search-toggle').addClass('d-md-inline');
            $('#search-area').removeClass('d-md-inline');
        }, 300);
    })

    $('#header-notif-toggle').click(() => {
        $('#header-notif').fadeToggle(300);
    })

    $('#header-comment-toggle').click(() => {
        $('#header-comment').fadeToggle(300);
    })

    $('#header-profile-toggle').click(() => {
        $('#header-profile').fadeToggle(300);
    })

    $('.sidebar-group-link').click(function () {
        $('.sidebar-group-link').removeClass('active');

        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');

        $(this).addClass('active');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
    })

    // $('.active').click(function() {
    //     alert('aaaaaaaaaa');
    //     $('.active').removeClass('active');

    //     $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
    //     $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');        
    // })


    $('#fullscreen').click(function () {
        toggleFullScreen();
    });

    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.mozRequestFullscreen) {
                document.documentElement.mozRequestFullscreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('#compress').removeClass('d-none');
            $('#expand').addClass('d-none');
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $('#compress').addClass('d-none');
            $('#expand').removeClass('d-none');
        }
    }
});