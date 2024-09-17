// Select the camera toggle button and icon
const cameraToggle = document.getElementById('cameraToggle');
const cameraIcon = document.getElementById('cameraIcon');

// Flag to track which camera is active (front or back)
let isFrontCamera = true;

// Add event listener to toggle the camera when the icon is clicked
cameraToggle.addEventListener('click', () => {
    isFrontCamera = !isFrontCamera;  // Toggle camera state

    // Update the icon and camera based on the new state
    if (isFrontCamera) {
        cameraIcon.style.backgroundImage = "url('front-camera-icon.png')"; // Set front camera icon
        console.log('Switched to front camera');
    } else {
        cameraIcon.style.backgroundImage = "url('back-camera-icon.png')"; // Set back camera icon
        console.log('Switched to back camera');
    }

    // Here, you can integrate the logic to actually toggle the camera functionality
});
