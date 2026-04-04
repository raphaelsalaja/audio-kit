import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseModern4({
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
          d="M1.95987 2.04196C1.5622 1.92606 1.14587 2.15448 1.02997 2.55215C0.91407 2.94982 1.14249 3.36615 1.54016 3.48205L16.0402 7.70805C16.4378 7.82395 16.8542 7.59553 16.9701 7.19786C17.086 6.80019 16.8575 6.38386 16.4599 6.26796L13 5.25959V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V4.82242L1.95987 2.04196Z"
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
          d="M0 15.25C0 13.1788 1.67879 11.5 3.75 11.5C5.56436 11.5 7.07759 12.7882 7.425 14.5H15V11.5771C16.7067 11.9284 17.9898 13.4393 17.9898 15.25C17.9898 15.6642 17.654 16 17.2398 16H15.2524L15.25 16H0.75C0.335786 16 0 15.6642 0 15.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseModern4;
