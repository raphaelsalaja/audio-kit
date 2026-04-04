import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseSparkle({
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
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V14.25C16 15.7692 14.7692 17 13.25 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628ZM10.3428 8.9072L12.2373 9.5381C12.5435 9.6406 12.75 9.9268 12.75 10.25C12.75 10.5732 12.5435 10.8594 12.2373 10.9619L10.3428 11.5928L9.71149 13.4873C9.60949 13.793 9.32278 14 9.00008 14C8.67738 14 8.39078 13.793 8.28868 13.4873L7.65739 11.5928L5.76289 10.9619C5.45669 10.8594 5.25018 10.5732 5.25018 10.25C5.25018 9.9268 5.45669 9.6406 5.76289 9.5381L7.65739 8.9072L8.28868 7.0127C8.39068 6.707 8.67738 6.5 9.00008 6.5C9.32278 6.5 9.60939 6.707 9.71149 7.0127L10.3428 8.9072Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseSparkle;
