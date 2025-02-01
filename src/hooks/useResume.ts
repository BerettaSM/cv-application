import { useContext } from "react";

import { ResumeContext } from "../context";

export default function useResume() {
  return useContext(ResumeContext);
}
