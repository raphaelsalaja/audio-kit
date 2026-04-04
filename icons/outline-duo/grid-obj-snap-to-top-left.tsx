import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridObjSnapToTopLeft({
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
          d="M6.25 2.25H3.25C2.69772 2.25 2.25 2.69772 2.25 3.25V6.25C2.25 6.80228 2.69772 7.25 3.25 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.25C7.25 2.69772 6.80228 2.25 6.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.25H3.25C2.69772 2.25 2.25 2.69772 2.25 3.25V6.25C2.25 6.80228 2.69772 7.25 3.25 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.25C7.25 2.69772 6.80228 2.25 6.25 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 12V11.75C2.25 11.198 2.698 10.75 3.25 10.75H3.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 15.75H3.25C2.698 15.75 2.25 15.302 2.25 14.75V14.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 14.5V14.75C7.25 15.302 6.802 15.75 6.25 15.75H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10.75H6.25C6.802 10.75 7.25 11.198 7.25 11.75V12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 12V11.75C10.75 11.198 11.198 10.75 11.75 10.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 15.75H11.75C11.198 15.75 10.75 15.302 10.75 14.75V14.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 14.5V14.75C15.75 15.302 15.302 15.75 14.75 15.75H14.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.75H14.75C15.302 10.75 15.75 11.198 15.75 11.75V12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 3.5V3.25C10.75 2.698 11.198 2.25 11.75 2.25H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 7.25H11.75C11.198 7.25 10.75 6.802 10.75 6.25V6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 6V6.25C15.75 6.802 15.302 7.25 14.75 7.25H14.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 2.25H14.75C15.302 2.25 15.75 2.698 15.75 3.25V3.5"
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

export default GridObjSnapToTopLeft;
