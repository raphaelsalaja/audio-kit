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
          d="M11.3471 13.0046C11.9051 11.8246 13.099 11 14.5 11C16.433 11 18 12.5671 18 14.5C18 16.4329 16.433 18 14.5 18H11.5C10.1193 18 9 16.8807 9 15.5C9 14.1706 10.0376 13.0836 11.3471 13.0046Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V9.7289C15.5265 9.58018 15.0226 9.5 14.5 9.5C12.7873 9.5 11.2959 10.3609 10.4013 11.653C8.72597 12.1306 7.5 13.6717 7.5 15.5C7.5 16.0304 7.60325 16.5368 7.79075 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseCloud;
