import type { ReactNode } from "react";

interface CheckAuthProps {
  protected: boolean;
  children: ReactNode;
}

const CheckAuth = ({ children }: CheckAuthProps) => {
  return <>{children}</>;
};

export default CheckAuth;
