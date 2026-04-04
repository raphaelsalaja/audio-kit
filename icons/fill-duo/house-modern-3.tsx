import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseModern3({
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
          d="M3.29993 2.74506C3.48875 2.60341 3.73323 2.55892 3.95984 2.62496L14.4598 5.68496C14.7799 5.77824 15 6.07161 15 6.40501V15.25C15 15.6642 14.6642 16 14.25 16H3.75C3.33579 16 3 15.6642 3 15.25V3.34501C3 3.10897 3.11112 2.8867 3.29993 2.74506Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.02997 2.55215C1.14587 2.15448 1.5622 1.92606 1.95987 2.04196L16.4599 6.26796C16.8575 6.38386 17.086 6.80019 16.9701 7.19786C16.8542 7.59553 16.4378 7.82395 16.0402 7.70805L1.54016 3.48205C1.14249 3.36615 0.91407 2.94982 1.02997 2.55215Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 9C7.552 9 8 8.552 8 8C8 7.448 7.552 7 7 7C6.448 7 6 7.448 6 8C6 8.552 6.448 9 7 9Z"
          fill={fill}
        />
        <path
          d="M9.25 16C8.83579 16 8.5 15.6642 8.5 15.25V11.25C8.5 10.2835 9.2835 9.5 10.25 9.5C11.2165 9.5 12 10.2835 12 11.25V15.25C12 15.6642 11.6642 16 11.25 16H9.25Z"
          fill={fill}
        />
        <path
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseModern3;
