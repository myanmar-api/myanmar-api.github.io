const root_url =
    "https://script.google.com/macros/s/AKfycbzfBfs4p67GNOts_PIR48JrV1LKlB6pE6pn-R1aR1-xzJ_F6-a-oIv5_8FmQh1KTrMTyw/exec";

stateSelect.on("change", function () {
    const selectedValue = this.value;

    $.ajax({
        url: root_url + "/get/" + selectedValue + "?callback=?",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (result) {
            const { data, success } = result;
            if (success) {
                console.log(data);
            } else {
                console.log("fail");
            }
        },
    });
});
