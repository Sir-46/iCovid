import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Tag, Descriptions } from "antd";
import StatusItem from "../../components/Status";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { getData, getListCase, getTrend } from "../../services/api";
import { PrivinceCount } from "../../tools/find";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [total_cases, setTotalCases] = useState(0);
  const [new_cases, setNewCases] = useState(0);
  const [active_cases, setActiveCases] = useState(0);
  const [total_recovered, setRecoveredCases] = useState(0);
  const [total_deaths, setTotalDeaths] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const [lineData, setLineData] = useState([]);

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
      key: "gender",
      filters: [
        {
          text: "ชาย",
          value: "ชาย"
        },
        {
          text: "หญิง",
          value: "หญิง"
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) =>
        record.gender && record.gender.indexOf(value) === 0
    },
    {
      title: "อายุ",
      dataIndex: "age",
      key: "age",
      sorter: {
        compare: (a, b) => a.age - b.age
      }
    },
    {
      title: "สัญชาติ",
      key: "nationality",
      dataIndex: "nationality",
      render: text => (
        <img
          className="nationality-icon"
          src={
            text === "ไทย"
              ? require("../../assets/img/nationality/thailand.png")
              : require("../../assets/img/nationality/china.png")
          }
          alt=""
        />
      )
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
      filters: [
        {
          text: "หาย",
          value: "หาย"
        },
        {
          text: "รักษา",
          value: "รักษา"
        },
        {
          text: "เสียชีวิต",
          value: "เสียชีวิต"
        },
        {
          text: "ไม่ระบุ",
          value: "ไม่ระบุ"
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
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
    initTrend();
  }, []);

  const initData = () => {
    getData().then(res => {
      const { ผู้ติดเชื้อ, เพิ่มวันนี้, กำลังรักษา, หายแล้ว, เสียชีวิต } = res;
      setTotalCases(+ผู้ติดเชื้อ);
      setNewCases(+เพิ่มวันนี้);
      setActiveCases(+กำลังรักษา);
      setRecoveredCases(+หายแล้ว);
      setTotalDeaths(+เสียชีวิต);
      setLoading(false);
    });
  };

  const initListCases = () => {
    getListCase().then(res => {
      setDataSource(res);
    });
  };

  const initTrend = () => {
    let data = [];
    let itemArr = null;
    let i = 0;
    getTrend().then(res => {
      if (res) {
        itemArr = Object.values(res);
        for (const item in res) {
          data.push({ name: item, ...itemArr[i] });
          i = i + 1;
        }
      }
      setLineData(data);
    });
  };

  return (
    <div>
      <Row gutter={[10, 10]} className="mb-20">
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="ผู้ติดเชื้อ"
            count={total_cases}
            new_cases={new_cases}
            icon={require("../../assets/icon/virus.png")}
          />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="กำลังรักษา"
            count={active_cases}
            icon={require("../../assets/icon/hospital.png")}
          />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="หายแล้ว"
            count={total_recovered}
            icon={require("../../assets/icon/emotion.png")}
          />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <StatusItem
            loading={loading}
            title="เสียชีวิต"
            count={total_deaths}
            icon={require("../../assets/icon/grave.png")}
          />
        </Col>
      </Row>
      <Card
        title="แนวโน้มผู้ติดเชื้อ COVID-19
ทั้งหมดในประเทศไทย"
        className="mb-30"
      >
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={lineData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }}
          >
            <defs>
              <linearGradient id="confirmed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1890ffb3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1890ffb3" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#039245b3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#03924566" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="deaths" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#be2029b3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#be202966" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend iconType="square" />
            <Area
              type="monotone"
              dataKey="confirmed"
              stroke="#1890ff"
              fillOpacity={1}
              fill="url(#confirmed)"
              dot={null}
            />
            <Area
              type="monotone"
              dataKey="recovered"
              stroke="#039245"
              fill="url(#recovered)"
              dot={null}
            />
            <Area
              type="monotone"
              dataKey="deaths"
              stroke="#BE2029"
              fill="url(#deaths)"
              dot={null}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
      <Card
        title="LIST CASES"
        extra={
          <a href="https://covid19.workpointnews.com/?to=THAILAND">
            ข้อมูลจาก covid19.workpointnews.com
          </a>
        }
        className="mb-30"
      >
        <Descriptions
          title=""
          column={{ xxl: 4, xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }}
        >
          <Descriptions.Item label="สงขลา">
            {PrivinceCount("สงขลา", dataSource)}
          </Descriptions.Item>
          <Descriptions.Item label="ปัตตานี">
            {PrivinceCount("ปัตตานี", dataSource)}
          </Descriptions.Item>
          <Descriptions.Item label="ยะลา">
            {PrivinceCount("ยะลา", dataSource)}
          </Descriptions.Item>
          <Descriptions.Item label="นาราธิวาส">
            {PrivinceCount("นาราธิวาส", dataSource)}
          </Descriptions.Item>
        </Descriptions>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="number"
          scroll={{ x: true }}
        />
      </Card>
    </div>
  );
};

export default Index;
