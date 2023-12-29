function startTimer() {
    // Set the initial timer duration in seconds
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    let timerDuration = 30;
    console.log(`Timer initialized at ${currentTime}`);

      
    // Function to play a notification sound
    function playNotificationSound() {
      const audio = new Audio('mixkit-clear-announce-tones-2861.wav'); 
      audio.play();
    }
  
    // Display the first alert after 30 seconds
    setTimeout(function () {
      
      
      // Increase the timer duration for the next alert
      timerDuration += 90;
  
      // Display the second alert after 1:30 minutes
      setTimeout(function () {
        playNotificationSound();
        currentDate = new Date();
        currentTime = currentDate.toLocaleTimeString();
        console.log(`8/5 at ${currentTime}.`);
        
        
        // Increase the timer duration for the third alert
        timerDuration += 60;
  
        // Display the third alert after 1 minute
        setTimeout(function () {
          playNotificationSound();
          currentDate = new Date();
          currentTime = currentDate.toLocaleTimeString();
          console.log(`7/6 at ${currentTime}.`);
          
          
          // Increase the timer duration for the fourth alert
          timerDuration += 180;
  
          // Display the fourth alert after 3 minutes
          setTimeout(function () {
            playNotificationSound();
            currentDate = new Date();
            currentTime = currentDate.toLocaleTimeString();
            console.log(`7/9 at ${currentTime}. Hearing for cracking.`);
            
            
            // Increase the timer duration for the fifth alert
            timerDuration += 60;
  
            // Display the fifth alert after 1 minute
            setTimeout(function () {
              playNotificationSound();
              currentDate = new Date();
              currentTime = currentDate.toLocaleTimeString();
              console.log(`Cooling at ${currentTime}.`);
              
            }, 60 * 1000);
  
          }, 180 * 1000);
  
        }, 60 * 1000);
  
      }, 90 * 1000);
  
    }, 30 * 1000);
  }
  