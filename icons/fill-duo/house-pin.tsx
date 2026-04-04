import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HousePin({
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
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V8.72958C15.5263 8.58043 15.0224 8.5 14.5 8.5C11.7419 8.5 9.5 10.7419 9.5 13.5C9.5 14.9476 10.118 16.1292 10.8045 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 10C12.5703 10 11 11.5703 11 13.5C11 16.1543 14.0107 17.8369 14.1396 17.9072C14.2519 17.9687 14.3759 18 14.5 18C14.6241 18 14.748 17.9688 14.8604 17.9072C14.9893 17.8369 18 16.1543 18 13.5C18 11.5703 16.4297 10 14.5 10ZM14.5 14.5C13.9478 14.5 13.5 14.0522 13.5 13.5C13.5 12.9478 13.9478 12.5 14.5 12.5C15.0522 12.5 15.5 12.9477 15.5 13.5C15.5 14.0523 15.0522 14.5 14.5 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HousePin;
