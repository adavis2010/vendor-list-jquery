


$().ready(() => {


    $("#create").click(() => {
        let vendor = {
            id: 0,
            code: $("#pcode").val(),
            name: $("#pname").val(),
            Address: $("#paddress").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            email: $("#pemail").val(),
            phone: $("#pphone").val(),

        }
        console.debug("Vendor b4:", vendor);
        vendorCreate(vendor)
            .done((response) => {
                console.log("Create Successful")

                console.log("Create Failed")

            })
    })

})
