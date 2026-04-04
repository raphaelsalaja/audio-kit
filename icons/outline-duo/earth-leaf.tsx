import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthLeaf({
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
          d="M10.5602 12.3668C10.0476 13.5821 10.3323 15.1202 11.6615 16.0506C12.573 16.8672 15.1935 16.9241 16.4088 14.9303C18.1152 12.1307 16.9912 8.95508 16.2759 7.75244C15.0796 10.1261 11.8325 9.61336 10.5602 12.3668Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.85468 2.04793C4.5588 2.61682 3.05362 4.72304 2.58801 5.70505C2.85045 6.71247 3.86294 8.96093 5.81342 9.89552C4.94992 8.70187 5.18698 7.2491 6.27056 6.41618C7.71182 5.30831 9.14574 7.13997 9.80071 6.61935C10.0648 6.37554 9.77531 4.79077 9.97849 3.85109C10.1563 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72452 1.33681 6.85468 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.068 16.186C17.47 14.88 17.915 10.704 16.274 7.716C15.15 10.064 12.558 9.711 11.107 11.499C10.677 12.029 10.346 12.749 10.346 13.525C10.346 14.562 10.858 15.479 11.643 16.034"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.35999 17.25C9.35999 17.25 12.383 16.418 14.291 12.976"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73551 3.7861 9.97371 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83801 6.603 9.62661 6.6251 9.44121 6.5487L8.51411 6.1666C7.78921 5.8678 6.96161 5.9623 6.32271 6.4169C5.75691 6.8194 5.40531 7.4578 5.36751 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02031 6.8697 3.97031 8.6883 5.49661 9.6832C5.92251 9.9178 6.90031 10.6811 6.83231 11.8894C6.78151 12.791 6.98201 13.1844 7.30421 13.4519"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.84739C6.55941 9.67759 7.49831 9.40379 8.55471 9.80449"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.6732 15.8686C3.8105 14.8991 1.75 12.1902 1.75 9C1.75 4.9959 4.9959 1.75 9 1.75C11.5064 1.75 13.7157 3.0219 15.0178 4.9554"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthLeaf;
