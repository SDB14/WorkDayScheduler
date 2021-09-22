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

// set function to change color for the hour

function updateCSS(){
    var timeSelector=moment().hours()

    $(".time-block").each(function(){

        var hourDiv=$(this).attr("id")

        if (hourDiv < timeSelector){
            $(this).addClass("past")
        }

        else if (hourDiv > timeSelector){
            $(this).addClass("future")
        }

        else {
            $(this).addClass("present")
        }



    })

}