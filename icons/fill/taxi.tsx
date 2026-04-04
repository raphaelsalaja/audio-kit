import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Taxi({
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
          d="M6.5 1.75C6.5 1.33579 6.83579 1 7.25 1H10.75C11.1642 1 11.5 1.33579 11.5 1.75V2.5H6.5V1.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6.23982 2.5C4.96017 2.5 3.84941 3.38269 3.56076 4.6296L2.88119 7.5642L2.10012 8.15C1.40767 8.66934 1.00012 9.48443 1.00012 10.35V14.75C1.00012 15.7165 1.78361 16.5 2.75012 16.5H3.25C4.21651 16.5 5 15.7165 5 14.75V14.5H13V14.75C13 15.7165 13.7835 16.5 14.75 16.5H15.25C16.2165 16.5 17 15.7165 17 14.75V10.35C17 9.48443 16.5925 8.66934 15.9 8.15L15.1189 7.5642L14.4394 4.62957C14.1506 3.38291 13.0401 2.5 11.7603 2.5H6.23982ZM5.02208 4.96793C5.15324 4.40128 5.65807 4 6.2398 4H11.7603C12.3419 4 12.8468 4.40131 12.978 4.96803L13.5644 7.5H4.43573L5.02208 4.96793ZM5 12C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12ZM14 11C14 11.5523 13.5523 12 13 12C12.4477 12 12 11.5523 12 11C12 10.4477 12.4477 10 13 10C13.5523 10 14 10.4477 14 11Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Taxi;
