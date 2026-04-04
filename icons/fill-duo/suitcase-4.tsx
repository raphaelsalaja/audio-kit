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
          d="M1 4.74988C1 4.33566 1.33579 3.99988 1.75 3.99988H16.25C16.6642 3.99988 17 4.33566 17 4.74988V7.32391C17 8.49643 16.2563 9.54155 15.1464 9.92411L9.24447 11.959C9.08607 12.0137 8.91393 12.0137 8.75553 11.959L2.85354 9.92407C1.74374 9.54166 1 8.49769 1 7.32391V4.74988Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.5 8.90578V13.25C1.5 14.7692 2.73079 16 4.25 16H13.75C15.2692 16 16.5 14.7692 16.5 13.25V8.90527C16.1749 9.36809 15.7074 9.73074 15.1464 9.9241L9.24447 11.959C9.08607 12.0137 8.91393 12.0137 8.75553 11.959L2.85354 9.92406C2.29257 9.73077 1.82514 9.36845 1.5 8.90578Z"
          fill={fill}
        />
        <path
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Suitcase4;
