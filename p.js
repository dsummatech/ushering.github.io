$(function () {
    $("button").click(function () {
    var name = $("input").val();
    $("b").text(name);
    }); 
    $("form").submit(function () {
        return false;
    })
});