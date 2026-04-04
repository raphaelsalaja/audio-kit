import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardSignal({
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
          d="M3.75 3C2.23054 3 1 4.23203 1 5.75V12.25C1 13.768 2.23054 15 3.75 15H8.63192C9.34032 11.0208 12.8172 8 17 8V5.75C17 4.23203 15.7695 3 14.25 3H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M17 6.5H1V8H17V6.5Z" fill={fill} />
        <path
          d="M3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17 11C13.9622 11 11.5 13.4622 11.5 16.5V16.75C11.5 17.1642 11.1642 17.5 10.75 17.5C10.3358 17.5 10 17.1642 10 16.75V16.5C10 12.6338 13.1338 9.5 17 9.5H17.25C17.6642 9.5 18 9.83579 18 10.25C18 10.6642 17.6642 11 17.25 11H17Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17 14C15.6222 14 14.5 15.1222 14.5 16.5V16.75C14.5 17.1642 14.1642 17.5 13.75 17.5C13.3358 17.5 13 17.1642 13 16.75V16.5C13 14.2938 14.7938 12.5 17 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H17Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17 17.5C16.448 17.5 16 17.052 16 16.5C16 15.948 16.448 15.5 17 15.5C17.552 15.5 18 15.948 18 16.5C18 17.052 17.552 17.5 17 17.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CreditCardSignal;
