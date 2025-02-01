import { type PropsWithChildren } from "react";

import { ResumeContextProvider } from ".";

export default function AppContextWrapper({ children }: PropsWithChildren) {
  return <ResumeContextProvider>{children}</ResumeContextProvider>;
}
