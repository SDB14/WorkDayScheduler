// id
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))


//class
$(".saveBtn").on("click",function(){
    var textvalue=$(this).siblings(".textvalue").val()
var timeDiv=$(this).parent().attr("id")

localStorage.setItem(timeDiv,textvalue)

})

// in order to reference key (time block) make key and string value equal to keep on screen reload (persistance)
$("#9 .textvalue").val(localStorage.getItem("9"))

