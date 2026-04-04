import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NightModeOff({
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
          d="M14.6569 3.34323C13.2092 1.89547 11.2092 1 9 1C4.58168 1 1 4.58179 1 9C1 11.2083 1.8948 13.2077 3.34163 14.6553L9.99884 8H7.61962C7.26628 7.38921 7.00948 6.71558 6.87009 6H11.9994L13.4998 4.5H6.75495C6.77833 3.90914 6.88401 3.33848 7.05736 2.79527C7.67079 2.6034 8.32332 2.5 9 2.5C10.7949 2.5 12.4199 3.22752 13.5961 4.40374L14.6569 3.34323Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.021 5.16209L14.9045 6.27842C15.153 6.81659 15.3301 7.3945 15.4236 8H13.1827L11.6825 9.5H15.4811C15.4431 9.9986 15.349 10.4815 15.2049 10.9423C14.5848 11.1398 13.9296 11.25 13.25 11.25C12.2781 11.25 11.356 11.0367 10.528 10.6543L5.1611 16.0205C6.30068 16.6449 7.60888 17 9.00001 17C13.4183 17 17 13.4182 17 9C17 7.60929 16.6451 6.30145 16.021 5.16209Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default NightModeOff;
