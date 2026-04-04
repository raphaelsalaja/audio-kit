import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CardSparkle({
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
          d="M4.75 1H13.25C14.767 1 16 2.233 16 3.75V14.25C16 15.767 14.767 17 13.25 17H4.75C3.233 17 2 15.767 2 14.25V3.75C2 2.233 3.233 1 4.75 1ZM9.72584 5.56116C9.63985 5.23068 9.34148 5 9 5C8.65852 5 8.36015 5.23068 8.27416 5.56116L7.71404 7.71402L5.56115 8.27417C5.23067 8.36015 5 8.65852 5 9C5 9.34148 5.23067 9.63985 5.56115 9.72583L7.71404 10.286L8.27416 12.4388C8.36015 12.7693 8.65852 13 9 13C9.34148 13 9.63985 12.7693 9.72584 12.4388L10.286 10.286L12.4388 9.72583C12.7693 9.63985 13 9.34148 13 9C13 8.65852 12.7693 8.36015 12.4388 8.27417L10.286 7.71402L9.72584 5.56116Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CardSparkle;
