<div id="cd-widget"></div>
<script>
  (function() {
      if (window.chatWidgetScriptLoaded) return;
      window.ChatWidgetConfig = {
        projectId: "67a3905172dcad8734b95e79", 
      };

      var chatWidgetScript = document.createElement("script");
      chatWidgetScript.type = 'text/javascript';
      chatWidgetScript.src = "https://storage.googleapis.com/cdwidget/dist/assets/js/main.js";
      chatWidgetScript.onload = function() {
          // Wait until widget is loaded
          var checkWidget = setInterval(function() {
              var widgetIcon = document.querySelector("#cd-widget img"); // Adjust selector as needed
              if (widgetIcon) {
                  clearInterval(checkWidget);
                  widgetIcon.src = "https://media.tenor.com/E3rdAXiaSosAAAAi/cat-heart.gif";
                  widgetIcon.style.width = "50px"; // Adjust size if needed
                  widgetIcon.style.height = "50px";
              }
          }, 500);
      };

      document.body.appendChild(chatWidgetScript);
      window.chatWidgetScriptLoaded = true;
  })();
</script>
