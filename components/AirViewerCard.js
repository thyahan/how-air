import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Divider } from "antd";
import { getAQIColorString, getAQIColorMessage } from "../utils";

const AirViewerCard = ({ item }) => {
  const {
    nameTH,
    areaTH,
    AQILast: {
      date,
      time,
      AQI: { aqi }
    }
  } = item;

  const aqiNumber = parseInt(aqi);
  const color = getAQIColorString(aqiNumber);
  const message = getAQIColorMessage(aqiNumber);
  const format = "อัพเดท DD/MM/YYYY เวลา HH:mm";
  const datetime = moment(`${date}${time}`, "YYYY-MM-DDHH:mm").format(format);
  
  return (
    <div className="air-viewer-card" style={{borderColor: color }}>
      <div className="station-name">
        <h4>{nameTH}</h4>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="station-area">
        <a>{areaTH}</a>
      </div>
      <div className="station-detail" style={{ borderColor: color }}>
        <div className='station-detail-aqi'>
          <p id='aqi-title'>AQI</p>
          <p id='aqi-value' style={{ color }}>{aqi}</p>
          <p id='aqi-message' style={{ color }}>{message}</p>
          <p id='aqi-datetime'>{datetime}</p>
        </div>
      </div>
    </div>
  );
};

AirViewerCard.propTypes = {
  item: PropTypes.shape({
    nameTH: PropTypes.string.isRequired,
    areaTH: PropTypes.string.isRequired,
    AQILast: PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      AQI: PropTypes.shape({
        color_id: PropTypes.string.isRequired,
        aqi: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })
};

export default AirViewerCard;
