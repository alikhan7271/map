const imageInput = document.getElementById('imageInput');
let map;

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      EXIF.getData(img, function () {
        const lat = EXIF.getTag(this, 'GPSLatitude');
        const lon = EXIF.getTag(this, 'GPSLongitude');
        const latRef = EXIF.getTag(this, 'GPSLatitudeRef') || 'N';
        const lonRef = EXIF.getTag(this, 'GPSLongitudeRef') || 'E';

        if (lat && lon) {
          const latitude = convertDMSToDD(lat, latRef);
          const longitude = convertDMSToDD(lon, lonRef);

          if (map) map.remove();
          map = L.map('map').setView([latitude, longitude], 15);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);
          L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Rasm lokatsiyasi').openPopup();
        } else {
          alert("Rasmda lokatsiya ma'lumoti yo‘q");
        }
      });
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

function convertDMSToDD(dms, ref) {
  const [deg, min, sec] = dms;
  let dd = deg + min / 60 + sec / 3600;
  if (ref === 'S' || ref === 'W') dd *= -1;
  return dd;
}
