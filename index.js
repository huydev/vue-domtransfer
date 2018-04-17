(function(){
  var vueDomtransfer = {
    install: function(Vue, options){
      Vue.directive('domtransfer', {
        inserted (el, binding, vnode) {
          let target = binding.value;
          let source = el.parentNode;
          let targetDom = document.querySelector(target);
          targetDom.append(el);
          el.__lastTarget = target;
        },
        update (el, binding, vnode, oldVnode) {},
        componentUpdated (el, binding, vnode, oldVnode) {
          var newTarget = binding.value;
          var oldTarget = el.__lastTarget;
          if(newTarget !== oldTarget) {
            let target = binding.value;
            let targetDom = document.querySelector(target);
            targetDom.append(el);
            el.__lastTarget = target;
          }
        },
        unbind (el, binding, vnode) {
          el.parentNode.removeChild(el);
        }
      });
    }
  }
  if (typeof exports == "object") {
    module.exports = vueDomtransfer
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueDomtransfer })
  } else if (window.Vue) {
    window.vueDomtransfer = vueDomtransfer;
  }
})();