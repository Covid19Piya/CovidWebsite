import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Personal = ({ formData, setForm, navigation }) => {
  const { name, age, gender,telephone } = formData;

  return (
    <Container maxWidth="xs">
      <h3>ข้อมูลส่วนตัวของผู้ใช้งาน</h3>
      <TextField
        label="ชื่อ"
        name="name"
        value={name}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="อายุ"
        name="age"
        value={age}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="เพศ"
        name="gender"
        value={gender}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="เบอร์โทร"
        name="telephone"
        value={telephone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        ถัดไป
      </Button>
    </Container>
  );
};