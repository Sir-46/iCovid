import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Tag } from "antd";
import StatusItem from "../../components/Status";

import { getData, getListCase } from "../../services/api";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [total_cases, setTotalCases] = useState(0);
  const [new_cases, setNewCases] = useState(0);
  const [active_cases, setActiveCases] = useState(0);
  const [total_recovered, setRecoveredCases] = useState(0);
  const [total_deaths, setTotalDeaths] = useState(0);
  const [new_deaths, setNewDeaths] = useState(0);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "number",
      key: "name"
    },
    {
      title: "วันที่ตรวจพบ",
      dataIndex: "statementDate",
      key: "statementDate"
    },
    {
      title: "เพศ",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "อายุ",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "สัญชาติ",
      key: "nationality",
      dataIndex: "nationality"
    },
    {
      title: "อาชีพ",
      key: "job",
      dataIndex: "job"
    },
    {
      title: "แหล่งติดเชื้อ",
      key: "origin",
      dataIndex: "origin"
    },
    {
      title: "แหล่งติดเชื้อ",
      key: "detectedAt",
      dataIndex: "detectedAt"
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      render: text => (
        <Tag
          color={
            text === "หาย"
              ? "green"
              : text === "รักษา"
              ? "yellow"
              : text === "เสียชีวิต"
              ? "red"
              : "#ccc"
          }
        >
          {text}
        </Tag>
      )
    }
  ];

  useEffect(() => {
    initData();
    initListCases();
  }, []);

  const initData = () => {
    getData().then(res => {
      const {
        total_cases,
        new_cases,
        active_cases,
        total_deaths,
        total_recovered,
        new_deaths
      } = res.latest_stat_by_country[0];

      setTotalCases(+toNumber(total_cases));
      setNewCases(+new_cases);
      setActiveCases(+toNumber(active_cases));
      setRecoveredCases(+total_recovered);
      setTotalDeaths(+total_deaths);
      setNewDeaths(+new_deaths);
      setLoading(false);
    });
  };

  const toNumber = value => {
    return value.split(",")[0] + value.split(",")[1];
  };

  const initListCases = () => {
    getListCase().then(res => {
      if (res.status === 200) {
        setDataSource(res.data);
      }
    });
  };

  const PrivinceCount = key => {
    let count = 0;
    dataSource.filter(item => {
      if (item.origin === key) {
        count++;
      }
    });
    return count;
  };
  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="TOTAL CASES"
            count={total_cases}
            new_cases={new_cases}
            icon={require("../../assets/icon/virus.png")}
          />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="ACTIVE CASES"
            count={active_cases}
            icon={require("../../assets/icon/hospital.png")}
          />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="RECOVERED CASES"
            count={total_recovered}
            icon={require("../../assets/icon/emotion.png")}
          />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="TOTAL DEATHS"
            count={total_deaths}
            new_cases={new_deaths}
            icon={require("../../assets/icon/grave.png")}
          />
        </Col>
      </Row>
      <Card
        title="LIST CASES"
        extra={
          <a href="https://covid19.workpointnews.com/?to=THAILAND">
            ข้อมูลจาก covid19.workpointnews.com
          </a>
        }
        className="mb-30"
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="number"
          scroll={{ x: true }}
        />
      </Card>
      <p>{PrivinceCount("ปัตตานี")}</p>
      <p>{PrivinceCount("ยะลา")}</p>
      <p>{PrivinceCount("นาราธิวาส")}</p>
      <p>{PrivinceCount("สงขลา")}</p>
    </div>
  );
};

export default Index;
