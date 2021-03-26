

$().ready(() => {


    let id = $("#pid").val();
    vendorDetail(id)
        .done((vendor) => {
            console.log("Vendor:", vendor);
            display(vendor);

        })
        .fail((err) => { //message will show up in browser
            alert("FAIL!");
        });


    $("#change").click(() => {
        let vendor = {
            id: 3,
            code: $("#pcode").val(),
            name: $("#pname").val(),
            address: $("#paddress").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            email: $("#pemail").val(),
            phone: $("#pphone").val(),

        }


        console.debug("Vendor:", vendor);
        vendorUpdate(vendor.id, vendor)
            .done((response) => {
                console.log("Put Successful")


            })
            .fail((err) => {
                console.log("Put Failed")
            })
    })

})

    




const display = (vendor) => {
    $("#pid").val(vendor.id);
    $("#pcode").val(vendor.code);
    $("#pname").val(vendor.name);
    $("#paddress").val(vendor.address);
    $("#pcity").val(vendor.city);
    $("#pstate").val(vendor.state);
    $("#pzip").val(vendor.zip);
    $("#pemail").val(vendor.email);
    $("#pphone").val(vendor.phone);



};
