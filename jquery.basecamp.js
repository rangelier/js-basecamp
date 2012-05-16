$.extend({
    basecamp: function (settings, collection, callback) {
        $.support.cors = true;

        var url = "https://basecamphq.com/";
        var account = settings.account;
        var token = settings.token;
        var header = "Basic " + $.base64.encode(token);

        String.prototype.splice = function (idx, rem, s) {
            return (this.slice(0, idx) + s + "." + this.slice(idx + Math.abs(rem)));
        };

        var uri = url.splice(8, 0, account) + collection + "." + settings.dataType;

        $.ajax({
            url: uri,
            contentType: "application/json",
            dataType: settings.dataType,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", header);
            },
            success: function (response) {
                if ($.isFunction(callback)) {
                    callback.call(this, response);
                }
            },
            error: function (jqXHR, statusText, errorThrown) {
                $.error(jqXHR.statusText);
            }
        });
    }
});