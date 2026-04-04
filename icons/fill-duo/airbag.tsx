import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Airbag({
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
          d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.25 7.25C4.35457 7.25 5.25 6.35457 5.25 5.25C5.25 4.14543 4.35457 3.25 3.25 3.25C2.14543 3.25 1.25 4.14543 1.25 5.25C1.25 6.35457 2.14543 7.25 3.25 7.25Z"
          fill={fill}
        />
        <path
          d="M11.194 12.683C10.89 12.108 10.298 11.75 9.64701 11.75H7.72001C7.24901 11.75 6.82401 11.49 6.60901 11.071L5.35901 8.638C5.17001 8.27 4.71701 8.123 4.34901 8.314C3.98101 8.503 3.83501 8.955 4.02501 9.324L5.27501 11.757C5.74701 12.678 6.68401 13.251 7.72001 13.251H9.64701C9.74001 13.251 9.82501 13.302 9.86801 13.384L11.437 16.351C11.572 16.605 11.832 16.75 12.101 16.75C12.219 16.75 12.339 16.722 12.451 16.663C12.817 16.469 12.957 16.016 12.763 15.649L11.194 12.683Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Airbag;
