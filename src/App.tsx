import { GlobalStyle } from "./styles/global";

import { ResumeGenerator } from "./components";
import { AppContextWrapper } from "./context";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppContextWrapper>
        <ResumeGenerator />
      </AppContextWrapper>
    </>
  );
}
