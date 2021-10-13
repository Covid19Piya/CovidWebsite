import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    name,
    age,
    gender,
    address,
    city,
    telephone,
    state,
    zip,
    time,
    other,
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h3>ตรวจสอบรายละเอียด</h3>
      <RenderAccordion summary="ข้อมูลส่วนตัวของผู้ใช้งาน" go={ go } details={[
        { 'ชื่อ': name },
        { 'อายุ': age },
        { 'เพศ': gender },
        { 'เบอร์โทรศัพท์': telephone},
      ]} />
      <RenderAccordion summary="ข้อมูลอาการป่วย" go={ go } details={[
        { 'Address': address },
        { 'City': city },
        { 'State': state },
        { 'Zip': zip },
      ]} />
      <RenderAccordion summary="ข้อมูลสำหรับใช้ติดต่อ" go={ go } details={[
        { 'ช่วงเวลาที่ติดต่อสะดวก': time },
        { 'รายละเอียดอื่น ๆ': other },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => go('submit')}
      >
        ส่งข้อมูล
      </Button>

    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)