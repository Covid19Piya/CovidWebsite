import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export class Sick extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
  render() {

    return (
      <div>
        <h1 className="mb-5">Sick </h1>
        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="ใส่เครื่องช่วยหายใจ"
                name="s1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="ไอ"
                name="s2"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="เจ็บคอ"
                name="s3"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="ปวดกล้ามเนื้อ"
                name="s4"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="มีน้ำมูก"
                name="s5"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="มีเสมหะ"
                name="s6"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="หายใจลำบาก"
                name="s7"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="ปวดศีรษะ"
                name="s8"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="ถ่ายเหลว"
                name="s9"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="จมูกไม่ได้กลิ่น"
                name="s10"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="ลิ้นไม่รับรส"
                name="s11"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="ตาแดง"
                name="s12"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="ผื่น"
                name="s13"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Group className="mb-3">
                <Form.Label>อื่นๆ</Form.Label>
                <Form.Control type="text" placeholder="ระบุ" />
              </Form.Group>
            </div>
          ))}
        </Form>

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sick;
