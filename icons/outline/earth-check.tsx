import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthCheck({
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
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73551 3.7861 9.97371 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83801 6.603 9.62661 6.6251 9.44121 6.5487L8.51411 6.1666C7.78921 5.8678 6.96161 5.9623 6.32271 6.4169C5.75691 6.8194 5.40531 7.4578 5.36751 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59167 5.7457C3.02037 6.8697 3.97027 8.6883 5.49667 9.6832C5.92257 9.9178 6.90037 10.6811 6.83237 11.8894C6.73917 13.5437 7.49187 13.4869 8.29057 14.0814C8.88927 14.5269 8.74517 15.5695 8.74517 16.2151"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75409 9.8474C6.90799 9.6041 8.33619 9.1472 9.99159 10.7675C11.7665 12.5048 12.44 9.5786 14.3102 10.1823"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.744 15L13.353 16.5L16.75 12"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9C16.25 4.9959 13.0041 1.75 9 1.75C4.9959 1.75 1.75 4.9959 1.75 9C1.75 12.9065 4.8396 16.0913 8.7086 16.2442"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthCheck;
