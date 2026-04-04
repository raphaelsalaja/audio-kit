import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HairDryer({
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
          d="M12.25 6.75V8.75C12.25 8.75 7.959 10.75 5.75 10.75C3.541 10.75 1.75 8.959 1.75 6.75C1.75 4.541 3.541 2.75 5.75 2.75C7.959 2.75 12.25 4.75 12.25 4.75V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.285 10.271L8.877 14.807C8.946 15.335 8.588 15.825 8.064 15.92L7.146 16.087C6.638 16.179 6.143 15.87 6.004 15.373L4.668 10.601"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.75V8.75C12.25 8.75 7.959 10.75 5.75 10.75C3.541 10.75 1.75 8.959 1.75 6.75C1.75 4.541 3.541 2.75 5.75 2.75C7.959 2.75 12.25 4.75 12.25 4.75V6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 4.75001L15.55 3.30601C15.88 3.16101 16.25 3.40401 16.25 3.76401V9.73501C16.25 10.096 15.88 10.338 15.55 10.193L12.25 8.74901"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 8C6.44036 8 7 7.44036 7 6.75C7 6.05964 6.44036 5.5 5.75 5.5C5.05964 5.5 4.5 6.05964 4.5 6.75C4.5 7.44036 5.05964 8 5.75 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HairDryer;
