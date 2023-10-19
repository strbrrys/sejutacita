(function () {
    'use strict';
    var options = ['left', 'center', 'right'];
    var cards = document.querySelectorAll('.news-box');
    addCardListeners();
    
    function addCardListeners () {
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.addEventListener('click', cardEventListener);
        
      }
    }
    
    function cardEventListener (e) {
      var parent = getParents(e.target, '.news-box')[0];
      var parentIndex = options.indexOf(parent.id);
      
      cards.forEach(function(card) {
        var index = options.indexOf(card.id);
        if (parentIndex > 1) {
          var previousIndex = index - 1 < 0 ? cards.length -1 : index - 1;
          card.id = options[previousIndex];
        } else if (parentIndex < 1) {
          var nextIndex = index + 1 > cards.length - 1 ? 0 : index + 1;
          card.id = options[nextIndex];
        }
      });
    }
    
    function getParents(elem, selector) {
      if (!Element.prototype.matches) {
        Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
          };
      }
      var parents = [];
      for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( selector ) {
          if ( elem.matches( selector ) ) {
            parents.push( elem );
          }
        } else {
          parents.push( elem );
        }
      }
      return parents;
    };
  })();