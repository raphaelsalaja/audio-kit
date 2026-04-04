import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareSparkle({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 5C9.34148 5 9.63985 5.23068 9.72584 5.56115L10.286 7.71402L12.4389 8.27417C12.7693 8.36015 13 8.65852 13 9C13 9.34148 12.7693 9.63985 12.4389 9.72583L10.286 10.286L9.72584 12.4388C9.63985 12.7693 9.34148 13 9 13C8.65852 13 8.36015 12.7693 8.27416 12.4388L7.71404 10.286L5.56115 9.72583C5.23067 9.63985 5 9.34148 5 9C5 8.65852 5.23067 8.36015 5.56115 8.27417L7.71404 7.71402L8.27416 5.56115C8.36015 5.23068 8.65852 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareSparkle;
