import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scribble({
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
          d="M1.75 9.881C1.75 9.881 5.824 5.674 8.142 3.85C9.692 2.631 10.605 2.511 11.167 3.072C12.192 4.093 10.76 5.99 8.809 8.584C6.858 11.178 5.446 12.666 6.515 13.675C7.57 14.671 9.752 12.443 10.565 11.535C11.378 10.627 13.234 8.613 14.143 9.46C14.948 10.21 13.753 12.022 13.33 12.832C12.907 13.642 12.387 14.478 13.005 15.037C13.879 15.828 15.25 14.161 15.25 14.161"
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

export default Scribble;
