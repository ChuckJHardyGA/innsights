front.on('conversation', function (event) {
  log(event.contact.handle);
});

function log(msg) {
  var $log = document.getelementbyid('log');
  $log.innerhtml = $log.innerhtml + '<br>' + msg;
}
