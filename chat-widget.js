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
      document.body.appendChild(chatWidgetScript);

      chatWidgetScript.onload = function() {
          var checkExist = setInterval(function() {
              var widgetIcon = document.querySelector('#cd-widget img'); // Adjust the selector if needed
              if (widgetIcon) {
                  widgetIcon.src = "https://media.tenor.com/E3rdAXiaSosAAAAi/cat-heart.gif";
                  widgetIcon.style.width = "50px"; // Adjust size if needed
                  widgetIcon.style.height = "50px";
                  clearInterval(checkExist);
              }
          }, 500); // Check every 500ms until the widget loads
      };

      window.chatWidgetScriptLoaded = true;
  })();
</script>
