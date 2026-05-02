const clockApp = {
    is24Hour: true, // Global variable to track 12/24 hour format

    // Function to update the clock display
    updateTime: function() {
        const now = new Date(); // Get current date and time
        let hours = now.getHours(); // Extract hours (0-23)
        let minutes = now.getMinutes(); // Extract minutes
        let seconds = now.getSeconds(); // Extract seconds

        let ampm = ''; // AM/PM indicator, empty by default

        // 12/24 Hour Logic: Convert to 12-hour format if needed
        if (!this.is24Hour) {
            ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
            hours = hours % 12 || 12; // Convert 0-23 to 1-12
        }

        // Format the time string with leading zeros
        const timeString = `${this.formatNumber(hours)}:${this.formatNumber(minutes)}:${this.formatNumber(seconds)}${this.is24Hour ? '' : ' ' + ampm}`;
        document.getElementById('clock-display').innerText = timeString; // DOM Update: Push to HTML
    },

    // Formatting Method: Add leading zero to numbers less than 10
    formatNumber: function(num) {
        return num < 10 ? '0' + num : num.toString();
    },

    // Function to toggle between 12 and 24 hour formats
    toggleFormat: function() {
        this.is24Hour = !this.is24Hour; // Toggle the global variable
        this.updateTime(); // Update immediately after toggle
    },

    // Initialization function
    init: function() {
        this.updateTime(); // Initial update
        setInterval(() => this.updateTime(), 1000); // The Interval: Update every second
        // Event Listener: Attach click event to toggle button
        document.getElementById('toggle-format').addEventListener('click', () => this.toggleFormat());
    }
};

// Initialize the clock app
clockApp.init();