import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stamp({
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
          d="M11.626 3.625C11.626 3.856 11.031 7.174 10.7 9H7.30201C6.97101 7.174 6.37601 3.856 6.37601 3.625C6.37601 2.178 7.55401 1 9.00101 1C10.448 1 11.626 2.178 11.626 3.625Z"
          fill={fill}
        />
        <path
          d="M15 15.25C15 15.6642 14.6642 16 14.25 16H3.75C3.33579 16 3 15.6642 3 15.25C3 14.8358 3.33579 14.5 3.75 14.5H14.25C14.6642 14.5 15 14.8358 15 15.25Z"
          fill={secondaryfill}
        />
        <path
          d="M1.44045 11.4978C1.29286 10.1652 2.33607 9 3.6768 9H14.3232C15.6641 9 16.7071 10.1652 16.5595 11.4978L16.4424 12.5551C16.4143 12.8083 16.2003 13 15.9454 13H2.05456C1.79973 13 1.58567 12.8083 1.5576 12.5551L1.44045 11.4978Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Stamp;
