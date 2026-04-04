import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Key4({
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
          d="M9.5 11.5L11 10V8.4121C12.301 7.5872 13.0671 5.9955 12.6235 4.2629C12.29 2.9603 11.2208 1.9159 9.91199 1.6075C7.44539 1.0262 5.25 2.8817 5.25 5.25C5.25 6.5837 5.9512 7.7471 7 8.4121V14.0759C7 14.1886 7.0384 14.2979 7.1088 14.3859L8.61249 16.2656C8.81119 16.5139 9.1889 16.5139 9.3876 16.2656L10.8913 14.3859C10.9617 14.2979 11.0001 14.1886 11.0001 14.0759V13L9.5 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.75C9.552 5.75 10 5.3023 10 4.75C10 4.1977 9.552 3.75 9 3.75C8.448 3.75 8 4.1977 8 4.75C8 5.3023 8.448 5.75 9 5.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.5 11.5L11 10V8.4121C12.301 7.5872 13.0671 5.9955 12.6235 4.2629C12.29 2.9603 11.2208 1.9159 9.91199 1.6075C7.44539 1.0262 5.25 2.8817 5.25 5.25C5.25 6.5837 5.9512 7.7471 7 8.4121V14.0759C7 14.1886 7.0384 14.2979 7.1088 14.3859L8.61249 16.2656C8.81119 16.5139 9.1889 16.5139 9.3876 16.2656L10.8913 14.3859C10.9617 14.2979 11.0001 14.1886 11.0001 14.0759V13L9.5 11.5Z"
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

export default Key4;
