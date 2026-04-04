import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOffice({
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
          d="M9.25 3.75H14.75C15.5784 3.75 16.25 4.4216 16.25 5.25V13.25C16.25 14.0784 15.5784 14.75 14.75 14.75H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 2.25H3.25C2.4216 2.25 1.75 2.9216 1.75 3.75V14.25C1.75 15.0784 2.4216 15.75 3.25 15.75H4.75C5.5784 15.75 6.25 15.0784 6.25 14.25V3.75C6.25 2.9216 5.5784 2.25 4.75 2.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 2.25H3.25C2.4216 2.25 1.75 2.9216 1.75 3.75V14.25C1.75 15.0784 2.4216 15.75 3.25 15.75H4.75C5.5784 15.75 6.25 15.0784 6.25 14.25V3.75C6.25 2.9216 5.5784 2.25 4.75 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 6.75H9.75V8.75H13.25V6.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.5C13.664 12.5 14 12.164 14 11.75C14 11.336 13.664 11 13.25 11C12.836 11 12.5 11.336 12.5 11.75C12.5 12.164 12.836 12.5 13.25 12.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PhoneOffice;
