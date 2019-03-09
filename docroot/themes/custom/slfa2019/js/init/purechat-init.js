(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtPurechat = {
    attach: function (context, settings) {
      $(context).find('body').once('mtPurechatInit').each(function() {
        window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: drupalSettings.slfa2019.purechatInit.purechatKey, f: true }); done = true; } }; })();
      });
    }
  };
})(jQuery, Drupal, drupalSettings);