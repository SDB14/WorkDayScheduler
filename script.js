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