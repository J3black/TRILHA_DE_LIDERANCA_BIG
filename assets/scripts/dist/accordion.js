        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }


        $wrapper.resizable({
            resize: doResize
        });

        function doResize(event, ui) {

            var scale, origin;

            scale = Math.min(
                ui.size.width / elWidth,
                ui.size.height / elHeight
            );

            $el.css({
                transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
            });

        }

        var starterData = {
            size: {
                width: $wrapper.width(),
                height: $wrapper.height()
            }
        }
        doResize(null, starterData);