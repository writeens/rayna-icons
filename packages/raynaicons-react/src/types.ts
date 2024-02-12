import { RefAttributes, ForwardRefExoticComponent, SVGProps } from "react";

export type RaynaProps = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>> & {
    title?: string;
    size?: string | number;
  };

export type RaynaIcon = ForwardRefExoticComponent<RaynaProps>;
