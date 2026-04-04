import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Balance({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.7998 16.4964C12.5405 15.7027 13 14.5966 13 13.3731C13 10.9579 11.2091 8.99998 9.00001 8.99998C6.7909 8.99998 5.00001 7.04202 5.00001 4.62684C5.00001 3.40341 5.45955 2.29731 6.20021 1.5036C3.1628 2.63853 1 5.56667 1 8.99999C1 13.4183 4.58179 17 9 17C9.98497 17 10.9284 16.822 11.7998 16.4964Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Balance;
