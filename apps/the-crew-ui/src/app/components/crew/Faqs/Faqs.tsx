import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function FAQsComponent() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Are fittings included in the cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary">
            No. This service doesn’t include the cost of fittings, additional spare parts, or extra
            helper. Our plumber can procure the required items for an additional cost (at market
            rate) which will reflect in your invoice.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
