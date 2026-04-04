import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trousers({
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
          d="M2.96799 5H15.031L15.454 15.177C15.475 15.658 15.302 16.113 14.969 16.461C14.636 16.809 14.186 17 13.705 17H11.858C10.986 17 10.259 16.375 10.128 15.513L9.11899 8.854C9.09999 8.733 8.89699 8.734 8.87699 8.854L7.86799 15.513C7.73799 16.376 7.00999 17.001 6.13799 17.001H4.29099C3.80899 17.001 3.35999 16.809 3.02699 16.462C2.69399 16.115 2.52099 15.658 2.54199 15.178L2.96799 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11 1H7V3.25C7 3.66421 6.66421 4 6.25 4C5.83579 4 5.5 3.66421 5.5 3.25V1H4.75007C3.78386 1 3.00007 1.78379 3.00007 2.75V4.23437L2.96814 5H15.031L15.0001 4.23437V2.75C15.0001 1.78379 14.2163 1 13.2501 1H12.5V3.25C12.5 3.66421 12.1642 4 11.75 4C11.3358 4 11 3.66421 11 3.25V1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Trousers;
