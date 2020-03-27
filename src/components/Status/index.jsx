import React from "react";
import { Card, Tag } from "antd";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const index = ({
  title,
  icon,
  count = 0,
  suffix = "",
  new_cases = 0,
  loading
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Card hoverable style={{ width: "100%" }} loading={loading}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "100%", paddingRight: "10%" }}>
            <div
              style={{
                fontSize: 14,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              {title}
            </div>
            <div span={24} style={{ fontSize: 28 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "start"
                }}
              >
                <CountUp
                  style={{
                    textOverflow: "ellipsis",
                    color: "#000",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                  }}
                  start={0}
                  end={count}
                  duration={1.5}
                  separator=","
                  decimals={0}
                  decimal=","
                  suffix={suffix}
                />
                {new_cases !== 0 && (
                  <div style={{ marginLeft: 10 }}>
                    <Tag color="green">{new_cases}</Tag>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div style={{ marginRight: 10 }}>
            <img src={icon} alt="" style={{ height: "100%" }} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default index;
