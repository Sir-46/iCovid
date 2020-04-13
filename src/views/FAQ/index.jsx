import React, { useState, useEffect } from "react";
import { Card, Table, Typography } from "antd";
import { GetResponse, GetIntent } from "../../services/api";

import ReactJson from "react-json-view";

const { Paragraph } = Typography;

const Index = () => {
  const colums = [
    {
      title: "message",
      dataIndex: "message",
      width: 100,
      render: (text) => <ReactJson src={text} />,
    },
    {
      title: "responseId",
      dataIndex: "_id",
      render: (text) => <Paragraph copyable>{text}</Paragraph>,
    },
    {
      title: "intentId",
      dataIndex: "_id",
      render: (text) => {
        return (
          <Paragraph copyable>
            {intent.map((item) => item.responseId === text && item._id)}
          </Paragraph>
        );
      },
    },
  ];

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [intent, setIntent] = useState([]);

  useEffect(() => {
    setLoading(true);
    GetIntent().then((res) => {
      if (res.message === "success") {
        setIntent(res.data);
      }
    });
    GetResponse().then((res) => {
      if (res.message === "success") {
        setResponse(res.data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      <Card title="Respone List">
        <Table
          loading={loading}
          columns={colums}
          dataSource={response}
          rowKey="message"
          scroll={{ x: true }}
          pagination={{ pageSize: response.length }}
        />
      </Card>
    </div>
  );
};

export default Index;
