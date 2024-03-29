import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FAQPage = () => {
  return (
    <div>
      <Typography variant="h4" mb={3}>
        Frequently Asked Questions
      </Typography>

    
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">
            How does the buying process work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The buying process involves making payments via credit card,
            ensuring both the seller and the customer are protected during the
            transaction.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">
            How can I get more details about an item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can contact the seller using the phone icon to inquire and
            gather more information about the item you are interested in.
          </Typography>
        </AccordionDetails>
      </Accordion>

    
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What is the return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently, there is no return policy in place. However, you can
            communicate with the seller to request additional details and photos
            to ensure satisfaction before making a purchase.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default FAQPage;
