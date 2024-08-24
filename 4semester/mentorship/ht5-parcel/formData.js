const formData = [];

function addData(data) {
    formData.push(data);
    console.log("Current Form Data: ", formData);
}

module.exports = { addData };
