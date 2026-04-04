import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spaceship({
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
          d="M9.00001 14.75H11.599C11.97 14.078 13.927 10.382 12.465 6.099C11.573 3.487 9.84001 1.916 9.00001 1.25C8.16101 1.916 6.42701 3.487 5.53501 6.099C4.07301 10.382 6.03001 14.078 6.40101 14.75H9.00001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.07101 10.556L3.83801 11.302C3.17401 11.703 2.80201 12.451 2.88201 13.222L3.25001 16.75L6.40101 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.929 10.556L14.162 11.302C14.826 11.703 15.198 12.451 15.118 13.222L14.75 16.75L11.599 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00001 14.75H11.599C11.97 14.078 13.927 10.382 12.465 6.099C11.573 3.487 9.84001 1.916 9.00001 1.25C8.16101 1.916 6.42701 3.487 5.53501 6.099C4.07301 10.382 6.03001 14.078 6.40101 14.75H9.00001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C9.69036 9 10.25 8.44036 10.25 7.75C10.25 7.05964 9.69036 6.5 9 6.5C8.30964 6.5 7.75 7.05964 7.75 7.75C7.75 8.44036 8.30964 9 9 9Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Spaceship;
