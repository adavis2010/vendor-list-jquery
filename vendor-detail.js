

$().ready(() => {


    $("button").click(() => {
        let id = $("#vid").val();
        vendorDetail(id)
            .done((vendor) => {
                console.log("Vendor:", vendor);
                display(vendor);

            })
            .fail((err) => { //message will show up in browser
                alert("Vendor not Found!");
            });
    })
});

const display = (vendor)=>{ 
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddress").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pzip").text(vendor.zip);
    $("#pemail").text(vendor.email);
    $("#pphone").text(vendor.phone);


    
};

