function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(320, 240);
  let lat, long;

  const btn = document.getElementById('submit');
  btn.addEventListener('click', async evResult => {
    const userName = document.getElementById('nameInput').value;
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { lat, long, userName, image64 };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch('/api', options);
    const jsonResp = await response.json();
    console.log(jsonResp);
    
  });

  if ('geolocation' in navigator) {
    console.log('Geolocation is available');
    navigator.geolocation.getCurrentPosition( async (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = long;
      // console.log(position);
      
    });
  } else {
    console.log('Geolocation is not available!');
  }

  
}