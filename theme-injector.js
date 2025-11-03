(function() {
    // Use GHL's jQuery if available, fallback to global jQuery
    var $j = window.jQuery || jQuery;

    // Button HTML
    var buttonHtml = '<button id="theme-builder-btn" style="margin:10px;padding:8px 12px;background:#4CAF50;color:white;border:none;border-radius:5px;cursor:pointer;z-index:9999;">Theme Builder</button>';

    // Function to inject button
    function injectButton() {
        // Adjust the selector for the sidebar; try common GHL sidebar containers
        var sidebar = $j('.sidebar, .main-sidebar, .g-sidebar, .sidebar-inner'); 
        if (sidebar.length && $j('#theme-builder-btn').length === 0) {
            sidebar.first().prepend(buttonHtml);
            addButtonClick();
        }
    }

    // Click handler
    function addButtonClick() {
        $j('#theme-builder-btn').on('click', function() {
            alert('Theme Builder Activated!');
            // TODO: Replace this alert with your theme builder modal/UI
        });
    }

    // Try injecting every 500ms until found (SPA safe)
    var interval = setInterval(function() {
        injectButton();
    }, 500);

    // Stop interval after 15 seconds to avoid performance issues
    setTimeout(function() {
        clearInterval(interval);
    }, 15000);

})();
