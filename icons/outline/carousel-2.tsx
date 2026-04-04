import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Carousel2({
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
          d="M2.75 4.17769L2.44701 4.0478C2.11701 3.9069 1.75 4.1489 1.75 4.508V13.4909C1.75 13.85 2.11701 14.092 2.44701 13.9509L2.75 13.8213"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 4.17769L15.553 4.0478C15.883 3.9069 16.25 4.1489 16.25 4.508V13.4909C16.25 13.85 15.883 14.092 15.553 13.9509L15.25 13.8213"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 15.25H11.25C11.802 15.25 12.25 14.802 12.25 14.25V3.75C12.25 3.198 11.802 2.75 11.25 2.75H6.75C6.198 2.75 5.75 3.198 5.75 3.75V14.25C5.75 14.802 6.198 15.25 6.75 15.25Z"
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

export default Carousel2;
