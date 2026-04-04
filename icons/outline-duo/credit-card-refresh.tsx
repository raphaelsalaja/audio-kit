import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardRefresh({
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
          d="M9.52521 13.7495C9.52091 13.665 9.5 13.5854 9.5 13.5C9.5 10.7432 11.7432 8.5 14.5 8.5C14.9014 8.5 15.6172 8.5822 16 8.6745C16.1655 8.5134 16.0413 8.3498 16.25 8.2451V7.25H1.75V12.25C1.75 13.355 2.645 14.25 3.75 14.25H9.506C9.502 14.167 9.5 14.084 9.5 14C9.5 13.9143 9.52091 13.8342 9.52521 13.7495Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 7.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 12.75H17.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H8.756"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 15.387C15.999 15.918 15.288 16.25 14.5 16.25C12.981 16.25 11.75 15.019 11.75 13.5C11.75 11.981 12.981 10.75 14.5 10.75C15.666 10.75 16.662 11.476 17.063 12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 9.5C16.8359 9.5 16.5 9.8359 16.5 10.25V10.6245C15.9276 10.2266 15.2365 10 14.5 10C12.5703 10 11 11.5703 11 13.5C11 15.4297 12.5703 17 14.5 17C15.459 17 16.3867 16.5996 17.0449 15.9019C17.3301 15.6006 17.3164 15.126 17.0146 14.8418C16.7138 14.5576 16.2392 14.5718 15.955 14.8726C15.5722 15.2774 15.0556 15.5 14.4999 15.5C13.3974 15.5 12.4999 14.603 12.4999 13.5C12.4999 12.397 13.3974 11.5 14.4999 11.5C14.9943 11.5 15.4404 11.6934 15.7951 12H14.7499C14.3358 12 13.9999 12.3359 13.9999 12.75C13.9999 13.1641 14.3358 13.5 14.7499 13.5H17.2499C17.664 13.5 17.9999 13.1641 17.9999 12.75V10.25C17.9999 9.8359 17.6641 9.5 17.25 9.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CreditCardRefresh;
