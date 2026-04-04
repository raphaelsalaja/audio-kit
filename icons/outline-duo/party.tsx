import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Party({
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
          d="M4.64728 7.87117L2.79501 13.957V13.958C2.56201 14.724 3.27801 15.439 4.04301 15.206L6.85142 14.3513L4.64728 7.87117ZM10.3751 13.279L7.48132 4.67932L13.571 10.769C14.105 11.303 13.877 12.213 13.155 12.433L10.3751 13.279Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.79501 13.957L5.56801 4.84601C5.78801 4.12401 6.69801 3.89601 7.23201 4.43001L13.571 10.769C14.105 11.303 13.877 12.213 13.155 12.433L4.04301 15.206C3.27801 15.439 2.56201 14.724 2.79501 13.958V13.957Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.82499 14.359L4.65399 7.84799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.346 13.287L7.47501 4.673"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.743 2.49199L15.797 2.17699L15.481 1.22999C15.379 0.923988 14.872 0.923988 14.77 1.22999L14.454 2.17699L13.508 2.49199C13.355 2.54299 13.251 2.68599 13.251 2.84799C13.251 3.00999 13.355 3.15299 13.508 3.20399L14.454 3.51899L14.77 4.46599C14.821 4.61899 14.964 4.72199 15.125 4.72199C15.286 4.72199 15.43 4.61799 15.48 4.46599L15.796 3.51899L16.742 3.20399C16.895 3.15299 16.999 3.00999 16.999 2.84799C16.999 2.68599 16.896 2.54299 16.743 2.49199Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 6C13.1642 6 13.5 5.66421 13.5 5.25C13.5 4.83579 13.1642 4.5 12.75 4.5C12.3358 4.5 12 4.83579 12 5.25C12 5.66421 12.3358 6 12.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 3.43901C10.184 3.30601 10.588 2.97401 10.823 2.39101C11.13 1.62801 10.941 0.949007 10.878 0.751007"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.561 8.00001C14.694 7.81601 15.026 7.41201 15.609 7.17701C16.372 6.87001 17.051 7.05901 17.249 7.12201"
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

export default Party;
