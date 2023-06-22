$(document).ready(function () {
  $("#btn").on("click", function () {
    $("#modalWindow").dialog({
      show: {
        effect: "fade",
        duration: 600,
      },
      hide: {
        effect: "fade",
        duration: 600,
      },
    });

    $("#btn").hide();
  });

  $("#modalWindow").on("dialogclose", function () {
    $("#btn").show();
  });

  $("#btn").hover(
    function () {
      $(this).css({
        "background-color": "rgba(248, 238, 238, 0.662)",
        color: "rgb(248, 238, 238)",
      });
    },
    function () {
      $(this).css({
        "background-color": "",
        color: "",
      });
    }
  );

  $("#modalWindow").hover(
    function () {
      $(this).css({
        "background-color": "#2421328f",
        color: "rgb(248, 238, 238)",
      });
    },
    function () {
      $(this).css({
        "background-color": "",
        color: "",
      });
    }
  );
});
