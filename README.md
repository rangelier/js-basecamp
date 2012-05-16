js-basecamp
===========

A simple jQuery plugin for communication with the 37signals basecamp API

# How to use

	<script type="text/javascript">
        $(function () {
            $.basecamp({
                account: "your_account_name", // put your account name here.
                token: "your_token", // your access token. Can be found under My Info inside basecamp
                dataType: "json" // XML or JSON is supported
            }, "projects", function (data) {
                if (!$.isEmptyObject(data)) {
	           //do something with the response.
                }
            });
        });
    	</script>

# Options

* **account** // get or sets the basecamp account name
* **token** // get or sets the basecamp api access token
* **dataType** // get or sets the type of data that will be returned (JSON or XML) is supported

## Plugin parameters
$.basecamp(options,collection,callback)

* **options**
  The options object wich i explained above
* **collection**
  The type of collection to retrieve. For eq. projects, companies etc.
* **callback**
  The callback function wich will be called after the data is successfully retrieved from the basecamp API.

	