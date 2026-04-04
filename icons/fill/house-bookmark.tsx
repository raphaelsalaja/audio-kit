import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseBookmark({
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
          d="M16.25 10H13.75C12.785 10 12 10.785 12 11.75V17.25C12 17.553 12.183 17.827 12.463 17.943C12.743 18.059 13.065 17.996 13.28 17.78L15 16.06L16.72 17.78C16.864 17.924 17.055 18 17.25 18C17.347 18 17.444 17.981 17.537 17.943C17.817 17.827 18 17.553 18 17.25V11.75C18 10.785 17.215 10 16.25 10Z"
          fill={secondaryfill}
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V8.5H13.75C11.9566 8.5 10.5 9.95657 10.5 11.75V17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseBookmark;
