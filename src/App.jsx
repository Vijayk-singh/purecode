import { Toaster } from "sonner";
import { AppProvidersWrapper, BackToTop } from "./components";

import { configureFakeBackend } from "@/common";
import Page from './app/admin/widget/page'

// styles
import "@/assets/css/style.css";
import { AdminLayout } from "./layouts";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
    
     <AdminLayout><Page/></AdminLayout> 
      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
};

export default App;
