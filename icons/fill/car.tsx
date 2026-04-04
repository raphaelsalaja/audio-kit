import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Car({
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
          d="M6.23982 2.5C4.96017 2.5 3.84941 3.38269 3.56076 4.6296L2.88119 7.5642L2.10012 8.15C1.40767 8.66934 1.00012 9.48443 1.00012 10.35V14.75C1.00012 15.7165 1.78361 16.5 2.75012 16.5H3.25C4.21651 16.5 5 15.7165 5 14.75V14.5H13V14.75C13 15.7165 13.7835 16.5 14.75 16.5H15.25C16.2165 16.5 17 15.7165 17 14.75V10.35C17 9.48443 16.5925 8.66934 15.9 8.15L15.1189 7.5642L14.4394 4.62957C14.1506 3.38291 13.0401 2.5 11.7603 2.5H6.23982ZM5.02208 4.96793C5.15324 4.40128 5.65807 4 6.2398 4H11.7603C12.3419 4 12.8468 4.40131 12.978 4.96803L13.5644 7.5H4.43573L5.02208 4.96793ZM4 12C4.55228 12 5 11.5523 5 11C5 10.4477 4.55228 10 4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12ZM15 11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11C13 10.4477 13.4477 10 14 10C14.5523 10 15 10.4477 15 11Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Car;
