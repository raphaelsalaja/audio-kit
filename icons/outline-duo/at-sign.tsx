import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AtSign({
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
          d="M8.875 12C10.4628 12 11.75 10.6009 11.75 8.875C11.75 7.14911 10.4628 5.75 8.875 5.75C7.28718 5.75 6 7.14911 6 8.875C6 10.6009 7.28718 12 8.875 12Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.875 12C10.4628 12 11.75 10.6009 11.75 8.875C11.75 7.14911 10.4628 5.75 8.875 5.75C7.28718 5.75 6 7.14911 6 8.875C6 10.6009 7.28718 12 8.875 12Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 5.75001V10.933C11.75 12.487 14.086 12.755 15.322 10.654C16.37 8.87601 16.113 6.16401 14.804 4.38001C12.878 1.75301 8.42497 0.771007 5.19097 2.94201C2.21797 4.93801 1.15997 8.97501 2.80197 12.238C4.42697 15.467 8.24197 17.032 11.695 15.864"
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

export default AtSign;
