// Use noConflict to avoid GHL jQuery conflicts
var $j = jQuery.noConflict(true);

$j(document).ready(function() {
    console.log("Theme Builder Loaded!");

    // Example: Add a new button to the GHL sidebar
    var buttonHtml = '<button id="theme-builder-btn" style="margin:10px;padding:8px 12px;background:#4CAF50;color:white;border:none;border-radius:5px;cursor:pointer;">Theme Builder</button>';
    
    // Append button to sidebar or any container
    $j('.sidebar').prepend(buttonHtml);

    // Add click handler
    $j('#theme-builder-btn').on('click', function() {
        alert('Theme Builder Activated!');
        // You can trigger your theme builder modal here
    });
});
