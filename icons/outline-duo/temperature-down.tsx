import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TemperatureDown({
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
          d="M3.75 10.306V4.25C3.75 2.869 4.869 1.75 6.25 1.75C7.631 1.75 8.75 2.869 8.75 4.25V10.306C9.367 10.937 9.75 11.798 9.75 12.75C9.75 14.683 8.183 16.25 6.25 16.25C4.317 16.25 2.75 14.683 2.75 12.75C2.75 11.798 3.133 10.937 3.75 10.306Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 12V9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 10.306V4.25C3.75 2.869 4.869 1.75 6.25 1.75C7.631 1.75 8.75 2.869 8.75 4.25V10.306C9.367 10.937 9.75 11.798 9.75 12.75C9.75 14.683 8.183 16.25 6.25 16.25C4.317 16.25 2.75 14.683 2.75 12.75C2.75 11.798 3.133 10.937 3.75 10.306Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 14.25C7.07843 14.25 7.75 13.5784 7.75 12.75C7.75 11.9216 7.07843 11.25 6.25 11.25C5.42157 11.25 4.75 11.9216 4.75 12.75C4.75 13.5784 5.42157 14.25 6.25 14.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 7.75L13.75 10.25L11.25 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 10.25V2.75"
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

export default TemperatureDown;
