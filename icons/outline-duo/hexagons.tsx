import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hexagons({
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
          d="M11.25 10.8764V7.12359C11.25 6.58769 10.9641 6.09248 10.5 5.82458L7.25 3.94818C6.7859 3.68028 6.2141 3.68028 5.75 3.94818L2.5 5.82458C2.0359 6.09248 1.75 6.58769 1.75 7.12359V10.8764C1.75 11.4123 2.0359 11.9075 2.5 12.1754L4.4697 13.3126"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 7.1236V10.8764C6.75 11.4123 7.0359 11.9075 7.5 12.1754L10.75 14.0518C11.2141 14.3197 11.7859 14.3197 12.25 14.0518L15.5 12.1754C15.9641 11.9075 16.25 11.4123 16.25 10.8764V7.1236C16.25 6.5877 15.9641 6.09248 15.5 5.82458L13.5303 4.68738"
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

export default Hexagons;
