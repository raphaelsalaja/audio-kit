import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mars({
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
          d="M7.5 15.25C10.1234 15.25 12.25 13.1234 12.25 10.5C12.25 7.87665 10.1234 5.75 7.5 5.75C4.87665 5.75 2.75 7.87665 2.75 10.5C2.75 13.1234 4.87665 15.25 7.5 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 2.75H15.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 2.75L10.859 7.141"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5 15.25C10.1234 15.25 12.25 13.1234 12.25 10.5C12.25 7.87665 10.1234 5.75 7.5 5.75C4.87665 5.75 2.75 7.87665 2.75 10.5C2.75 13.1234 4.87665 15.25 7.5 15.25Z"
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

export default Mars;
