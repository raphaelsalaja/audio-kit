import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mustache({
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
          d="M11.53 5.75C10.482 5.803 9.531 6.371 9 7.262C8.469 6.371 7.518 5.803 6.47 5.75C4.5 5.75 2.656 9.397 0.75 8.278C0.75 10.192 2.375 12.25 5.25 12.25C6.717 12.252 8.101 11.585 9 10.444C9.899 11.586 11.283 12.253 12.75 12.25C15.625 12.25 17.25 10.192 17.25 8.278C15.344 9.397 13.5 5.75 11.53 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.53 5.75C10.482 5.803 9.531 6.371 9 7.262C8.469 6.371 7.518 5.803 6.47 5.75C4.5 5.75 2.656 9.397 0.75 8.278C0.75 10.192 2.375 12.25 5.25 12.25C6.717 12.252 8.101 11.585 9 10.444C9.899 11.586 11.283 12.253 12.75 12.25C15.625 12.25 17.25 10.192 17.25 8.278C15.344 9.397 13.5 5.75 11.53 5.75Z"
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

export default Mustache;
