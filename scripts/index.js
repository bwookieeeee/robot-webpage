$(document).ready(function () {
    $('#robot_type_selector').on('change', function () {
        var targetdiv = document.getElementById(this.value);
        var divs = document.getElementsByClassName("robot_type");

        if (targetdiv.id === 'none') {
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }
            return;
        } else {
            for (var i = 0; i < divs.length; i++) {
                if (divs[i] != targetdiv) {
                    divs[i].style.display = 'none';
                } else {
                    divs[i].style.display = 'flex';
                }
            }
        }
    });

    $('#camera_type_selector').on('change', function () {
        var targetdiv = document.getElementById(this.value);
        var divs = document.getElementsByClassName("camera_type");

        if (targetdiv.id === 'none') {
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }
            return;
        } else {
            for (var i = 0; i < divs.length; i++) {
                if (divs[i] != targetdiv) {
                    divs[i].style.display = 'none';
                } else {
                    divs[i].style.display = 'flex';
                }
            }
        }
    });

    $('#tts_type_selector').on('change', function () {
        var targetdiv = document.getElementById(this.value);
        var divs = document.getElementsByClassName("tts_type");

        if (targetdiv.id === 'none') {
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }
            return;
        } else {
            for (var i = 0; i < divs.length; i++) {
                if (divs[i] != targetdiv) {
                    divs[i].style.display = 'none';
                } else {
                    divs[i].style.display = 'flex';
                }
            }
        }
    });
});