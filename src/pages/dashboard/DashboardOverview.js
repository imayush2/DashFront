import React, { useState } from "react"; // Import useState here
import DatePickerComponent from "../components/DatePickerComponent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCashRegister,
//   faChartLine,
//   faCloudUploadAlt,
//   faPlus,
//   faRocket,
//   faTasks,
//   faUserShield,
// } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";

import { Col, Row } from "@themesberg/react-bootstrap";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  AcquisitionWidget,
} from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";

// Named the component "Dashboard"
const Dashboard = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        {/* <Dropdown className="btn-toolbar">
          <Dropdown.Toggle
            as={Button}
            variant="primary"
            size="sm"
            className="me-2"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />{" "}
              Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview
              Security
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" />{" "}
              Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        {/* <ButtonGroup>
          <Button variant="outline-primary" size="sm">
            Share
          </Button>
          <Button variant="outline-primary" size="sm">
            Export
          </Button>
        </ButtonGroup> */}

        {/* Date Picker Component */}
        <DatePickerComponent />
      </div>

      <Row className="justify-content-md-center">
        {/* <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col> */}

        {/* // no of doctors  */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="No. of Doctors"
            title="40"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faStethoscope}
            iconColor="shape-secondary"
          />
        </Col>

        {/* // no of users  */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="No. of user"
            title="4"
            // period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faHospital}
            iconColor="shape-tertiary"
          />
        </Col>

        {/* //disesase */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Diseases" data={trafficShares} />
        </Col>
      </Row>

      {/* //table */}
      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>

                {/* <Col xs={12} lg={6} className="mb-4">
                  // <TeamMembersWidget />
                </Col>{" "} */}
                {/* <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col> */}
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                {/* <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="No of patients"
                    value={452}
                    percentage={18.2}
                    data={totalOrders}
                  />
                </Col> */}
                {/* <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col> */}
                {/* <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

// Export the named component
export default Dashboard;
