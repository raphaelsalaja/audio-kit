import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinClock({
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
          d="M8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.2253 7.26151C13.9759 4.17821 11.3987 1.75 8.25 1.75C4.9363 1.75 2.25 4.438 2.25 7.75C2.25 12.25 6.6667 15.75 8.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9.5C11.7939 9.5 10 11.2944 10 13.5C10 15.7056 11.7939 17.5 14 17.5C16.2061 17.5 18 15.7056 18 13.5C18 11.2944 16.2061 9.5 14 9.5ZM16.3125 14.4502C16.1934 14.7398 15.9141 14.915 15.6191 14.915C15.5234 14.915 15.4277 14.8969 15.3339 14.8588L13.7148 14.1938C13.4336 14.0781 13.25 13.8042 13.25 13.5V11.75C13.25 11.3359 13.5859 11 14 11C14.4141 11 14.75 11.3359 14.75 11.75V12.9971L15.9043 13.4712C16.2871 13.6284 16.4707 14.0669 16.3125 14.4502Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PinClock;
