;(function(win, doc) {
  'use strict';

  //include
  $plugins.mainTitle = {
    appendTitle: function() {
      var title = $(".title").attr("title");
      $('#inc_title').append(title);
    }
  };

  // modal
  $plugins.modal = {
    gTarget: null,
    gId: null,
    gModal: null,
    hideModal: function() {
      var o = this;
      o.gModal.animate({
        'top': '25%',
        'opacity': 0
      }, 200, function() {
        $('#' + o.gId + '').removeClass('active');
      });
    },
    showModal: function() {
      var o = this;
      $('#' + o.gId + '').addClass('active');
      o.gModal.animate({
        'top': '50%',
        'opacity': 1
      }, 200);
    },
    init: function() {
        var o = this;
        o.gTarget = $('.ui-modal');
        o.gTarget.off().on('click', function(e) {
          if(!e) e = window.event;
          if (e.preventDefault){
              // Firefox, Chrome
              e.preventDefault();
          }else{
              // Internet Explorer
              e.returnValue = false;
          }
          o.gId = this.href.split('#')[1];
          o.gModal = $('#' + o.gId + '').find('.ui-modal-content');
          o.showModal();
          $('#' + o.gId + '').find('.btn-close').off().on('click', function() {
            o.hideModal();
          });
        });
      }
  }

  // 실행
  $(doc).ready(function() {
    $plugins.mainTitle.appendTitle();
    $plugins.modal.init();
  });


})(window, document);
