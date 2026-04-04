import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circuits2({
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
          d="M6.25 4.75C7.07843 4.75 7.75 4.07843 7.75 3.25C7.75 2.42157 7.07843 1.75 6.25 1.75C5.42157 1.75 4.75 2.42157 4.75 3.25C4.75 4.07843 5.42157 4.75 6.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 7.75C11.5784 7.75 12.25 7.07843 12.25 6.25C12.25 5.42157 11.5784 4.75 10.75 4.75C9.92157 4.75 9.25 5.42157 9.25 6.25C9.25 7.07843 9.92157 7.75 10.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 11.75C15.5784 11.75 16.25 11.0784 16.25 10.25C16.25 9.42157 15.5784 8.75 14.75 8.75C13.9216 8.75 13.25 9.42157 13.25 10.25C13.25 11.0784 13.9216 11.75 14.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 11.25C4.07843 11.25 4.75 10.5784 4.75 9.75C4.75 8.92157 4.07843 8.25 3.25 8.25C2.42157 8.25 1.75 8.92157 1.75 9.75C1.75 10.5784 2.42157 11.25 3.25 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75C7.07843 4.75 7.75 4.07843 7.75 3.25C7.75 2.42157 7.07843 1.75 6.25 1.75C5.42157 1.75 4.75 2.42157 4.75 3.25C4.75 4.07843 5.42157 4.75 6.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 7.75C11.5784 7.75 12.25 7.07843 12.25 6.25C12.25 5.42157 11.5784 4.75 10.75 4.75C9.92157 4.75 9.25 5.42157 9.25 6.25C9.25 7.07843 9.92157 7.75 10.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.75C15.5784 11.75 16.25 11.0784 16.25 10.25C16.25 9.42157 15.5784 8.75 14.75 8.75C13.9216 8.75 13.25 9.42157 13.25 10.25C13.25 11.0784 13.9216 11.75 14.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 8V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 11.25C4.07843 11.25 4.75 10.5784 4.75 9.75C4.75 8.92157 4.07843 8.25 3.25 8.25C2.42157 8.25 1.75 8.92157 1.75 9.75C1.75 10.5784 2.42157 11.25 3.25 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.31097 10.811L5.45697 11.957C5.64497 12.145 5.74997 12.399 5.74997 12.664V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 4.75V7.086C6.25 7.351 6.355 7.606 6.543 7.793L7.957 9.207C8.145 9.395 8.25 9.649 8.25 9.914V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.75V13.086C14.75 13.351 14.645 13.606 14.457 13.793L13.543 14.707C13.355 14.895 13.25 15.149 13.25 15.414V16.25"
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

export default Circuits2;
