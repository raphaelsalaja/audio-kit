import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardAlert({
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
          d="M3.75 14.25H9.767L12.405 10.084C12.798 9.464 13.702 9.464 14.095 10.084L16.037 13.15C16.173 12.879 16.25 12.574 16.25 12.25V7.25H1.75V12.25C1.75 13.355 2.645 14.25 3.75 14.25Z"
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
          d="M16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H6.4438"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.7499 16.25H16.1829C16.9709 16.25 17.4499 15.381 17.0279 14.715L14.0949 10.084C13.7019 9.464 12.7979 9.464 12.4049 10.084L9.47195 14.715C9.04995 15.381 9.52895 16.25 10.3169 16.25H10.7499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.75V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 17.5C13.664 17.5 14 17.164 14 16.75C14 16.336 13.664 16 13.25 16C12.836 16 12.5 16.336 12.5 16.75C12.5 17.164 12.836 17.5 13.25 17.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CreditCardAlert;
