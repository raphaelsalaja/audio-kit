import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RulerPen2({
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
          d="M2 3.25C2 2.28379 2.78379 1.5 3.75 1.5H6.25C7.21621 1.5 8 2.28379 8 3.25V14.75C8 15.7162 7.21621 16.5 6.25 16.5H3.75C2.78379 16.5 2 15.7162 2 14.75V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 13.5V12H4.75C5.16421 12 5.5 12.3358 5.5 12.75C5.5 13.1642 5.16421 13.5 4.75 13.5H2Z"
          fill={fill}
        />
        <path
          d="M2 6V4.5H4.75C5.16421 4.5 5.5 4.83579 5.5 5.25C5.5 5.66421 5.16421 6 4.75 6H2Z"
          fill={fill}
        />
        <path
          d="M2 9.75V8.25H4.75C5.16421 8.25 5.5 8.58579 5.5 9C5.5 9.41421 5.16421 9.75 4.75 9.75H2Z"
          fill={fill}
        />
        <path
          d="M10.5 5V12.5C10.5 13.0262 10.671 13.5595 10.8771 14.0234C11.0878 14.4974 11.3622 14.9578 11.626 15.3535C11.8912 15.7513 12.1549 16.0974 12.3518 16.3435C12.4506 16.467 12.5334 16.5663 12.5922 16.6356C12.7633 16.8373 12.9711 17 13.25 17C13.5295 17 13.7363 16.8378 13.9078 16.6356C13.9666 16.5663 14.0494 16.467 14.1482 16.3435C14.3451 16.0974 14.6088 15.7513 14.874 15.3535C15.1378 14.9578 15.4122 14.4974 15.6229 14.0234C15.829 13.5595 16 13.0262 16 12.5V5H10.5Z"
          fill={fill}
        />
        <path
          d="M10.5 5H16V3.75C16 2.23079 14.7692 1 13.25 1C11.7308 1 10.5 2.23079 10.5 3.75V5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default RulerPen2;
