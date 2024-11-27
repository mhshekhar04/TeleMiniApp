import { createThirdwebClient } from "thirdweb";

//const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;
const clientId = 'c01e9878d45ba0f45abaf91b999e034f'
export const client = createThirdwebClient({
  clientId: clientId,
});

