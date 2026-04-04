import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellOn({
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
          d="M15.75 12.75C14.645 12.75 13.75 11.855 13.75 10.75V6.5C13.75 3.877 11.623 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V10.75C4.25 11.855 3.355 12.75 2.25 12.75H15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.6637 3.99999C2.0543 2.85669 2.7052 1.83299 3.5453 0.999786"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.3363 3.99999C15.9457 2.85669 15.2948 1.83299 14.4547 0.999786"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 12.75C14.645 12.75 13.75 11.855 13.75 10.75V6.5C13.75 3.877 11.623 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V10.75C4.25 11.855 3.355 12.75 2.25 12.75H15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 15.3843C10.2005 15.9018 9.6409 16.25 9 16.25C8.3591 16.25 7.7995 15.9018 7.5 15.3843"
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

export default BellOn;
