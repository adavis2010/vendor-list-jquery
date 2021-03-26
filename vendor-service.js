const url = "http://localhost:32405/api/vendors"


const vendorDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}

const vendorCreate = (vendor) => {
    return $.ajax({
        method: "Post",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"

    })
}
const vendorUpdate = (id, vendor) => {
    return $.ajax({
        method: "Put",
        url: `${url}/${id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"

    })
}

const vendorRemove = (id) => {

}





