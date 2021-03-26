const url = "http://localhost:32405/api/vendors";

const vendorList = () => {
    return $ .getJSON(url);

}

const vendorDetail = (id) => {
    return $.getJSON(`${url}/${id}`);

}