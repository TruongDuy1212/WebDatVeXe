const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const trips = [
  {
    from_city: 'Thành phố Hồ Chí Minh',
    to_city: 'Vũng Tàu',
    date: '2025-06-05',
    departure_time: '08:00',
    bus_name: 'Xe khách A',
    price: 120000 
  },
  {
    from_city: 'Thành phố Hồ Chí Minh',
    to_city: 'Nha Trang',
    date: '2025-06-05',
    departure_time: '14:00',
    bus_name: 'Xe khách B',
    price: 130000 
  },
  {
    from_city: 'Thành phố Hồ Chí Minh',
    to_city: 'Đà Lạt',
    date: '2025-06-05',
    departure_time: '09:30',
    bus_name: 'Xe miền Trung',
    price: 100000 
  },
];

app.get('/api/trips', (req, res) => {
  const { from, to, date } = req.query;
  const results = trips.filter(trip =>
    trip.from_city.toLowerCase().trim() === (from || '').toLowerCase().trim() &&
    trip.to_city.toLowerCase().trim() === (to || '').toLowerCase().trim() &&
    trip.date === date
  );
  res.json(results);
});

app.listen(port, () => {
  console.log(`Trip server listening at http://localhost:${port}`);
});
