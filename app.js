$(document).ready(function () {
    const url =
        "https://script.google.com/macros/s/AKfycbzfBfs4p67GNOts_PIR48JrV1LKlB6pE6pn-R1aR1-xzJ_F6-a-oIv5_8FmQh1KTrMTyw/exec";
    const stateSelect = $("#stateSelect");
    const citySelect = $("#citySelect");

    var req_url = url + "?callback=?";
    $.ajax({
        url: req_url,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        beforeSend: function () {},
        success: function (result) {
            console.log(result);
            const { data, success } = result;
            if (success) {
                $.each(data, function (index, value) {
                    stateSelect.append(
                        $("<option></option>").val(value.slug).html(value.name)
                    );
                });
            } else {
                console.log("fail");
            }
        },
        complete: function (data) {},
    });

    stateSelect.on("change", function (e) {
        const selectedValue = this.value;
        var re1_url = url + "/get/" + selectedValue + "?callback=?";

        $.ajax({
            url: re1_url,
            type: "GET",
            crossDomain: true,
            dataType: "json",
            beforeSend: function () {},
            success: function (result) {
                const { data, success } = result;
                if (success) {
                    citySelect.empty();
                    $.each(data, function (index, value) {
                        citySelect.append(
                            $("<option></option>")
                                .val(value.name)
                                .html(value.name)
                        );
                    });
                } else {
                    console.log("fail");
                }
            },
            complete: function (data) {},
        });
    });
});
