export interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export interface LinkState {
    isClicked: boolean;
  }
  