import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RouteAlert({
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
          d="M15.4572 9.75H17C17.4142 9.75 17.75 9.41421 17.75 9C17.75 8.58579 17.4142 8.25 17 8.25H15.4572C15.4855 8.49608 15.5 8.74634 15.5 9C15.5 9.25366 15.4855 9.50392 15.4572 9.75Z"
          fill={fill}
        />
        <path
          d="M2.54279 8.25C2.51453 8.49608 2.5 8.74634 2.5 9C2.5 9.25366 2.51453 9.50392 2.54279 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2.54279Z"
          fill={fill}
        />
        <path
          d="M9 5.5C9.41421 5.5 9.75 5.83579 9.75 6.25V9.5C9.75 9.91421 9.41421 10.25 9 10.25C8.58579 10.25 8.25 9.91421 8.25 9.5V6.25C8.25 5.83579 8.58579 5.5 9 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 12.5C9.414 12.5 9.75 12.164 9.75 11.75C9.75 11.336 9.414 11 9 11C8.586 11 8.25 11.336 8.25 11.75C8.25 12.164 8.586 12.5 9 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RouteAlert;
