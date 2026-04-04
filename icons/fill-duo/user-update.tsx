import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserUpdate({
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
          d="M13 15.2686C13 14.3023 13.7838 13.5186 14.75 13.5186C15.7162 13.5186 16.5 14.3023 16.5 15.2686C16.5 16.2348 15.7162 17.0186 14.75 17.0186C13.7838 17.0186 13 16.2348 13 15.2686Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.99999 9.01855C6.14167 9.01855 3.69058 10.7343 2.60517 13.1859C2.05162 14.4371 2.74425 15.8502 4.01259 16.2499C5.29503 16.654 6.99283 17.0186 8.99999 17.0186C10.044 17.0186 11.0044 16.9199 11.8661 16.7684C11.6322 16.3196 11.5 15.8095 11.5 15.2686C11.5 13.4781 12.9486 12.0253 14.7376 12.0186C13.4753 10.2068 11.3787 9.01855 8.99999 9.01855Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserUpdate;
