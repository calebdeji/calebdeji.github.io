$("#submit").on("click", (event) => {
    event.preventDefault();
    /**
     * to get the list of form input values
     */
    const formDetails = $("#form").serialize();
    $.ajax({
        url: "https://formspree.io/calebdeji06@gmail.com",
        method: "POST",
        data: {
            message: formDetails
        },
        dataType: "json"
    }).done((data) => {
        console.log("data done : ", data);
    }).fail((err) => {
        console.log("data not sent : ", err);
    })
    return false;
})