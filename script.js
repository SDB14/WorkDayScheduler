// id
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))


//class
$(".saveBtn").on("click",function(){
    var textvalue=$(this).siblings(".textvalue").val()
var timeDiv=$(this).parent().attr("id")

localStorage.setItem(timeDiv,textvalue)

})

// in order to reference key (time block) make key and string value equal to keep on screen reload (persistance)
// $("#7 .textvalue").val(localStorage.getItem("7"))
// $("#8 .textvalue").val(localStorage.getItem("8"))
$("#9 .textvalue").val(localStorage.getItem("9"))
$("#10 .textvalue").val(localStorage.getItem("10"))
$("#11 .textvalue").val(localStorage.getItem("11"))
$("#12 .textvalue").val(localStorage.getItem("12"))
$("#13 .textvalue").val(localStorage.getItem("13"))
$("#14 .textvalue").val(localStorage.getItem("14"))
$("#15 .textvalue").val(localStorage.getItem("15"))
$("#16 .textvalue").val(localStorage.getItem("16"))
$("#17 .textvalue").val(localStorage.getItem("17"))
// $("#18 .textvalue").val(localStorage.getItem("18"))
// $("#19 .textvalue").val(localStorage.getItem("19"))
// $("#20 .textvalue").val(localStorage.getItem("20"))
// repeat for each hour id
// set function to change color for the hour

function updateCSS(){
    var timeSelector=moment().hours()

    $(".time-block").each(function(){
// might have to wrap $(this).attr("id") in a parse int
        var hourDiv=$(this).attr("id")

        if (hourDiv < timeSelector){
            $(this).addClass("past")
        }

        else if (hourDiv > timeSelector){
        $(this).removeClass("past present")
        
        
            $(this).addClass("future")
        }

        else {
           $(this).removeClass("past future")           
           
            $(this).addClass("present")
        }



    })

}

updateCSS()