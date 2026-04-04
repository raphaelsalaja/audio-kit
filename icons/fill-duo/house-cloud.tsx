import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseCloud({
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
          d="M7.94127 1.36281C8.56694 0.887449 9.4333 0.886573 10.0591 1.36312L15.3088 5.35288C15.7448 5.68398 16 6.20008 16 6.746V9.7289C15.5265 9.58018 15.0226 9.5 14.5 9.5C12.7873 9.5 11.2959 10.3609 10.4013 11.653C8.72597 12.1306 7.5 13.6717 7.5 15.5C7.5 16.0305 7.60325 16.5368 7.79076 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.3471 13.0046C11.9051 11.8246 13.099 11 14.5 11C16.433 11 18 12.5671 18 14.5C18 16.4329 16.433 18 14.5 18H11.5C10.1193 18 9 16.8807 9 15.5C9 14.1706 10.0376 13.0836 11.3471 13.0046Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseCloud;
