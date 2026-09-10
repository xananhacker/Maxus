const vehicles = [
  {
    id: 1,
    name: "Maxus T90 Elite",
    tagline: "Premium Luxury Pickup",
    desc: "The T90 Elite combines 2.0T Turbo power with Nappa leather luxury. Features 360° camera, adaptive cruise, and 6 driving modes. Built for executives who demand performance and presence.",
    images: [
      "exterior.jpg",
      "interior.jpg", 
      "ndani.png"
    ],
    specs: {
      "Engine": "2.0L Turbo Diesel",
      "Power": "218 HP",
      "Transmission": "8-Speed Automatic",
      "Drive": "4x4 Intelligent",
      "Seating": "5 Nappa Leather",
      "Tech": "360° Camera + ADAS"
    },
    wa: "2557XXXXXXXXX"
  },
  {
    id: 2,
    name: "Maxus G90 Executive",
    tagline: "Executive MPV",
    desc: "Flagship executive transport with 7 captain chairs, massage function, and rear entertainment. The G90 sets the standard for corporate mobility in East Africa.",
    images: [
      "interior.jpg?text=G90+Exterior",
      "exterior.jpg?text=G90+Cabin"
    ],
    specs: {
      "Engine": "2.0T V6",
      "Seating": "7 Captain Chairs",
      "Comfort": "Massage + Heating",
      "Entertainment": "Rear Dual Screens",
      "Safety": "L2+ Autonomous",
      "Range": "800KM"
    },
    wa: "2557XXXXXXXXX"
  },
  {
    id: 3,
    name: "Maxus MIFA 9",
    tagline: "Electric Luxury MPV",
    desc: "100% Electric luxury with 520KM range. Features airline-style seating, 64-color ambient lighting, and smart cockpit. The future of sustainable premium transport.",
    images: [
      "ndani.jpg?text=MIFA9+Front",
      "exterior?text=MIFA9+Interior"
    ],
    specs: {
      "Battery": "90kWh",
      "Range": "520KM WLTP",
      "Charging": "30min 30%-80%",
      "Seating": "7 VIP Airline Seats",
      "Lighting": "64-Color Ambient",
      "Drive": "FWD Electric"
    },
    wa: "2557XXXXXXXXX"
  }
];

let currentSlide = 0;
const slider = document.getElementById('slider');

// Load slides
vehicles.forEach((v, index) => {
  slider.innerHTML += `
    <div class="slide" onclick="openVehicle(${v.id})">
      <img src="${v.images[0]}" alt="${v.name}">
      <div class="slide-info">
        <h3>${v.name}</h3>
        <p>${v.tagline}</p>
      </div>
    </div>
  `;
});

function moveSlide(dir) {
  currentSlide += dir;
  if(currentSlide < 0) currentSlide = vehicles.length - 1;
  if(currentSlide >= vehicles.length) currentSlide = 0;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

function openVehicle(id) {
  const v = vehicles.find(x => x.id === id);
  const msg = encodeURIComponent(`Dear Maxus EA,\n\nI am interested in ${v.name} - ${v.tagline}\n\nPlease send quotation and brochure.\nThank you.`);
  const testMsg = encodeURIComponent(`Dear Maxus EA,\n\nI would like to BOOK A TEST DRIVE for ${v.name}\n\nPlease contact me.\nThank you.`);
  
  document.getElementById('modalInfo').innerHTML = `
    <h2 style="font-size:36px;font-weight:800;">${v.name}</h2>
    <p style="color:var(--silver);font-size:16px;margin:10px 0 20px;">${v.tagline}</p>
    <p style="line-height:1.8;margin-bottom:25px;">${v.desc}</p>
    
    <div class="modal-gallery">
      ${v.images.map(img => `<img src="${img}">`).join('')}
    </div>
    
    <h3 style="color:var(--silver);margin:25px 0 15px;text-transform:uppercase;letter-spacing:1px;">Specifications</h3>
    <div class="specs-grid">
      ${Object.entries(v.specs).map(([k,val]) => `<div class="spec-box"><b>${k}</b><br>${val}</div>`).join('')}
    </div>
    
    <div style="display:flex;gap:20px;margin-top:30px;">
      <a href="https://wa.me/${v.wa}?text=${msg}" target="_blank" class="btn">Request Quote</a>
      <a href="https://wa.me/${v.wa}?text=${testMsg}" target="_blank" class="btn" style="background:transparent;border:1px solid var(--silver);color:var(--silver);">Book Test Drive</a>
    </div>
  `;
  document.getElementById('vehicleModal').style.display = 'flex';
}

document.querySelector('.close').onclick = () => document.getElementById('vehicleModal').style.display = 'none';
window.onscroll = () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
