(function() {
  var showExample;

  showExample = function(exampleName) {
    $("#code").attr("src", "code.html?name=" + exampleName);
    $("#example").attr("src", "example.html?name=" + exampleName);
    return $("a.download").attr("href", "/static/examples/" + exampleName + ".zip");
  };

  $(document).ready(function() {
    var exampleName;
    exampleName = window.location.hash.slice(1);
    if (exampleName) {
      showExample(exampleName);
      $(".navigation ul li a").each(function() {
        if ($(this).attr("href").slice(1) === exampleName) {
          return $(this).addClass("active");
        }
      });
    }
    return $(".navigation ul li a").click(function() {
      $(".navigation ul li a").removeClass("active");
      $(this).addClass("active");
      exampleName = $(this).attr("href").slice(1);
      return showExample(exampleName);
    });
  });

}).call(this);