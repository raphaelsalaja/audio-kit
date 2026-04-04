import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthSearch({
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
          d="M10.35 11.2178C9.79518 11.966 9.03701 13.1894 9.25156 14.7525C8.78308 14.5002 8.6098 14.423 8.36986 14.1525C8.21001 13.9723 7.9967 13.8593 7.77945 13.7441C7.46849 13.5793 7.14947 13.4102 6.96763 13.034C6.79817 12.6835 6.81547 12.3397 6.83277 11.996C6.84998 11.6542 6.86718 11.3124 6.70054 10.9641C6.42389 10.3858 6.01911 10.039 5.78241 9.87898C6.30547 9.70092 7.60866 9.44829 8.63696 9.86229C9.3652 10.1554 9.76748 10.7458 10.35 11.2178Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.85464 2.04793C4.55877 2.61682 3.05359 4.72304 2.58798 5.70505C2.85042 6.71247 3.86291 8.96093 5.81338 9.89552C4.94989 8.70187 5.18695 7.2491 6.27053 6.41618C7.71179 5.30831 9.14571 7.13997 9.80068 6.61935C10.0648 6.37554 9.77528 4.79077 9.97846 3.85109C10.1562 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72449 1.33681 6.85464 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 16.25C15.2426 16.25 16.25 15.2426 16.25 14C16.25 12.7574 15.2426 11.75 14 11.75C12.7574 11.75 11.75 12.7574 11.75 14C11.75 15.2426 12.7574 16.25 14 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.59L17.25 17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73549 3.7861 9.97369 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.838 6.603 9.62659 6.6251 9.44119 6.5487L8.5141 6.1666C7.7892 5.8678 6.96159 5.9623 6.32269 6.4169C5.75689 6.8194 5.40529 7.4578 5.36749 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02031 6.8697 3.97031 8.6883 5.49661 9.6832C5.92251 9.9178 6.90031 10.6811 6.83231 11.8894C6.73911 13.5436 7.35879 13.633 8.15759 14.2274C8.56769 14.5326 8.67221 15.4704 8.61221 16.2104"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.8474C6.88271 9.6094 8.2737 9.1671 9.8829 10.6637"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.60159 16.2392C4.78289 16.0324 1.75 12.8703 1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 9.0854 16.2485 9.1705 16.2455 9.2553"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthSearch;
