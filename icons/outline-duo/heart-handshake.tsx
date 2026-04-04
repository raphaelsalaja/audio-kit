import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHandshake({
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
          d="M5.827 2.75C7.103 2.766 8.29 3.41 9 4.47L9.00002 4.47002L8.99999 4.47001L6.16699 8.29201L6.61299 8.69101C7.44599 9.43701 8.72899 9.35401 9.45999 8.50801L10.729 7.04001L14.0393 11.6053L14.049 11.619C12.481 13.521 10.392 14.741 9.471 15.222C9.174 15.377 8.827 15.377 8.53 15.222C6.96 14.403 2.001 11.435 2.001 6.609C1.993 4.489 3.704 2.763 5.827 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.96 14.403 8.53 15.222C8.827 15.377 9.174 15.377 9.471 15.222C10.392 14.741 12.481 13.521 14.049 11.619"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99999 4.47001L6.16699 8.29201L6.61299 8.69101C7.44599 9.43701 8.72899 9.35401 9.45999 8.50801L10.729 7.04001L14.05 11.62C15.154 10.281 16.001 8.60401 16.001 6.61001C16.009 4.49001 14.297 2.76401 12.175 2.75101C10.898 2.76701 9.71099 3.41101 9.00199 4.47101L8.99999 4.47001Z"
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

export default HeartHandshake;
