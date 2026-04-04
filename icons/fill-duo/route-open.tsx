import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RouteOpen({
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
          d="M2.5 9C2.5 5.40975 5.41022 2.5 9 2.5C12.5898 2.5 15.5 5.40975 15.5 9C15.5 12.5902 12.5898 15.5 9 15.5C5.41022 15.5 2.5 12.5902 2.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.9603 6.19753C12.2886 6.45009 12.35 6.92097 12.0975 7.24929L8.70047 11.6653C8.56888 11.8364 8.36998 11.9424 8.15461 11.9564C7.93924 11.9704 7.72829 11.8909 7.57568 11.7383L5.96668 10.1293C5.67379 9.83645 5.67379 9.36157 5.96668 9.06868C6.25957 8.77579 6.73445 8.77579 7.02734 9.06868L8.03235 10.0737L10.9085 6.33471C11.1611 6.0064 11.632 5.94498 11.9603 6.19753Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.4572 9.75H17C17.4142 9.75 17.75 9.41421 17.75 9C17.75 8.58579 17.4142 8.25 17 8.25H15.4572C15.4855 8.49608 15.5 8.74634 15.5 9C15.5 9.25366 15.4855 9.50392 15.4572 9.75Z"
          fill={fill}
        />
        <path
          d="M2.54279 8.25C2.51453 8.49608 2.5 8.74634 2.5 9C2.5 9.25366 2.51453 9.50392 2.54279 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2.54279Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RouteOpen;
