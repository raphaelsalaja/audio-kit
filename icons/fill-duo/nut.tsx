import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M13.8521 3.37061C13.3619 2.52541 12.4502 2 11.4732 2H6.5269C5.5498 2 4.6382 2.52541 4.148 3.37061L1.68319 7.62109C1.18999 8.47219 1.18999 9.52877 1.68319 10.3804L4.148 14.6304C4.6382 15.4756 5.5499 16.001 6.5269 16.001H11.4732C12.4503 16.001 13.3619 15.4756 13.8521 14.6304L16.3169 10.3799C16.8101 9.52878 16.8101 8.47221 16.3169 7.62061L13.8521 3.37061Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 12C10.6569 12 12.0001 10.6569 12.0001 9C12.0001 7.34315 10.6569 6 9.00009 6C7.34324 6 6.00009 7.34315 6.00009 9C6.00009 10.6569 7.34324 12 9.00009 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Nut;
