import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Contact = ({ formData, setForm, navigation }) => {
  const { time, other } = formData;

  return (
    <Container maxWidth="xs">
      <h3>ข้อมูลสำหรับใช้ติดต่อ</h3>
      <TextField
        label="ช่วงเวลาที่ติดต่อสะดวก"
        name="time"
        value={time}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="รายละเอียดอื่นๆ"
        name="other"
        value={other}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          ย้อนกลับ
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          ถัดไป
        </Button>
      </div>
    </Container>
  );
};