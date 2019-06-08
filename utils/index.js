export const getAQIColorMessage = (aqi) => {
  switch (true) {
    case aqi >= 201 : return 'อันตราย';
    case aqi >= 101: return 'มีผลกระทบต่อสุขภาพ';
    case aqi >= 51: return 'ปากลาง';
    case aqi >= 26: return 'ดี';
    case aqi >= 0: return 'ดีมาก';
    default: return 'ไม่พบข้อมูล'
  }
}
export const getAQIColorString = (aqi) => {
  switch (true) {
    case aqi >= 201 : return '#CCC';
    case aqi >= 101: return 'orange';
    case aqi >= 51: return 'gold';
    case aqi >= 26: return 'green';
    case aqi >= 0: return 'blue';
    default: return 'ไม่พบข้อมูล'
  }
}

