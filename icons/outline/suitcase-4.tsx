import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Suitcase4({
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
          d="M9 9.5C9.414 9.5 9.75 9.164 9.75 8.75C9.75 8.336 9.414 8 9 8C8.586 8 8.25 8.336 8.25 8.75C8.25 9.164 8.586 9.5 9 9.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.75 12.0957V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V12.0956"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.902 9.21503L9 11.25L3.09801 9.21503C2.29101 8.93703 1.75 8.17801 1.75 7.32391V4.74988H16.25V7.32391C16.25 8.17691 15.709 8.93693 14.902 9.21503Z"
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

export default Suitcase4;
