import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Sick = ({ formData, setForm, navigation }) => {
  const { city, state, zip } = formData;
  const options = ['Monday', 'Tuesday', 'Thursday', 
  'Friday', 'Saturday', 'Sunday']
  
  return (
    <Container maxWidth="xs">
      <h3>ข้อมูลอาการป่วย</h3>
      
      

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