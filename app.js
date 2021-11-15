$(document).ready(function () {
    const url =
        "https://script.google.com/macros/s/AKfycbyzn1UVIxRU8_kU-lRe0OLP8AvP-gLDHwnKpIYnqC92xC2aCn838xUXrLqyTFQMzd-rVA/exec";
    const stateSelect = $("#stateSelect");
    const citySelect = $("#citySelect");

    $.ajax({
        url: url,
        type: "GET",
        crossDomain: true,
        cache: false,
        dataType: "json",
        beforeSend: function () {
            console.log("before");
        },
        success: function (result) {
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
        complete: function (data) {
            console.log(data);
        },
    });

    stateSelect.on("change", function (e) {
        const selectedValue = this.value;
        console.log(selectedValue);

        $.ajax({
            url: url + "/get/" + selectedValue,
            type: "GET",
            headers: {
                "Access-Control-Allow-Origin":
                    "http://The web site allowed to access",
            },
            crossDomain: true,
            cache: false,
            dataType: "json",
            beforeSend: function () {
                console.log("before");
            },
            success: function (result) {
                console.log(result);
            },
            complete: function (data) {
                console.log("complete");
            },
        });
    });
});
