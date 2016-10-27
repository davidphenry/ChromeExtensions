function hideEpiLicenseMessage(pageDoc) {
  var docs = pageDoc.getElementsByTagName('div');
  var i=0;
  for (i = 0; i < docs.length; i++) {
    var $ele = $(docs[i]); 
    if ($ele.css('z-index') == 30000) { 
      $ele.hide()
    }
  }
}

hideEpiLicenseMessage(document);
