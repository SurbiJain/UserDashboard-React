import {Box, useTheme, typography} from '@mui/material';
import Header from '../../component/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from '../../Theme';

const FAQ = () =>
{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return(
  <Box m="20px">
    <Header title="FAQ" subtitle={"Frequently Asked Question Page"}/>
    

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <typography color={colors.greenAccent[500]} variant="h5">
          An Important question
        </typography>
      </AccordionSummary>
      <AccordionDetails>
        <typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic fuga accusamus optio! Aliquid, voluptates? Ipsa iusto nulla, officia culpa ea quaerat reprehenderit temporibus aliquam corporis, quas quod, nam architecto.
        </typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <typography color={colors.greenAccent[500]} variant="h5">
          Another Important question
        </typography>
      </AccordionSummary>
      <AccordionDetails>
        <typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic fuga accusamus optio! Aliquid, voluptates? Ipsa iusto nulla, officia culpa ea quaerat reprehenderit temporibus aliquam corporis, quas quod, nam architecto.
        </typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <typography color={colors.greenAccent[500]} variant="h5">
          Your favourite question
        </typography>
      </AccordionSummary>
      <AccordionDetails>
        <typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic fuga accusamus optio! Aliquid, voluptates? Ipsa iusto nulla, officia culpa ea quaerat reprehenderit temporibus aliquam corporis, quas quod, nam architecto.
        </typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <typography color={colors.greenAccent[500]} variant="h5">
          Some random question
        </typography>
      </AccordionSummary>
      <AccordionDetails>
        <typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic fuga accusamus optio! Aliquid, voluptates? Ipsa iusto nulla, officia culpa ea quaerat reprehenderit temporibus aliquam corporis, quas quod, nam architecto.
        </typography>
      </AccordionDetails>
    </Accordion>
  </Box>
  )

}

export default FAQ
