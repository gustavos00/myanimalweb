import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  Children: React.Component<any, any, any>;
}

export function RequireAuth({ Children }: RequireAuthProps) {
  //to do
}

export default RequireAuth