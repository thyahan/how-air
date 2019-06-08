import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { Select } from "antd";
import { getAirQuality } from "../service";
import { AirViewerCard } from "../components";
import "../styles/index.scss";

const { Option } = Select;

const filterAirData = (airData, filter) => {
  if (!filter || filter === "") return airData;
  const found = airData.find(data => data.stationID === filter);
  if (!found) return [];
  return [found];
};

const AirViewer = () => {
  const [airData, setAirData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAirQuality();
      if (resp) setAirData(get(resp, "stations", []));
    };

    fetchData();
  }, []);

  const renderStationFilter = data => {
    const emptyStation = { stationID: "", nameTH: "เลือกสถานี" };
    const stations = [emptyStation, ...data];
    const renderOption = () => {
      return stations.map((station, index) => {
        const { stationID, nameTH } = station;
        return (
          <Option key={index} value={stationID}>
            {nameTH}
          </Option>
        );
      });
    };
    return (
      <Select
        className="station-selector"
        defaultValue=""
        onChange={value => setFilter(value)}
      >
        {renderOption()}
      </Select>
    );
  };

  const renderCard = items => {
    return items.map((item, index) => (
      <AirViewerCard key={index} item={item} />
    ));
  };

  const items = filterAirData(airData, filter);

  return (
    <div className="air-viewer">
      <div className="filter">{renderStationFilter(airData)}</div>
      <div className="content">{renderCard(items)}</div>
    </div>
  );
};

AirViewer.propTypes = {
  filters: PropTypes.array
};

AirViewer.defaultProps = {
  filters: []
};

export default AirViewer;
