import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting3({
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
          d="M11.414 2.84802L3.60501 10.657C2.74301 11.52 2.20401 14.063 2.01101 15.116C1.96701 15.358 2.04501 15.606 2.21901 15.781C2.36101 15.923 2.55201 16.001 2.74901 16.001C2.79401 16.001 2.83901 15.997 2.88301 15.989C3.93601 15.798 6.47801 15.26 7.34301 14.396L15.151 6.58702C16.181 5.55702 16.181 3.87902 15.151 2.84902C14.153 1.85102 12.412 1.85002 11.414 2.84802Z"
          fill={fill}
        />
        <path
          d="M9.46967 14.1497C10.5216 13.0978 12.2284 13.0978 13.2803 14.1497C13.7464 14.6158 14.5036 14.6158 14.9697 14.1497C15.2626 13.8568 15.7374 13.8568 16.0303 14.1497C16.3232 14.4426 16.3232 14.9175 16.0303 15.2104C14.9784 16.2623 13.2716 16.2623 12.2197 15.2104C11.7536 14.7443 10.9964 14.7443 10.5303 15.2104C10.2374 15.5033 9.76256 15.5033 9.46967 15.2104C9.17678 14.9175 9.17678 14.4426 9.46967 14.1497Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenWriting3;
