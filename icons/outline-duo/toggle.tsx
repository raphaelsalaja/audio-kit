import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggle({
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
          d="M8.73834 12.75C9.95086 11.9438 10.75 10.5652 10.75 9C10.75 7.43477 9.95086 6.05619 8.73834 5.25H12.5C14.5711 5.25 16.25 6.92893 16.25 9C16.25 11.0711 14.5711 12.75 12.5 12.75H8.73834Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.73801 12.75H12.5C14.571 12.75 16.25 11.071 16.25 9C16.25 6.929 14.571 5.25 12.5 5.25H8.73801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 13.5C8.73528 13.5 10.75 11.4853 10.75 9C10.75 6.51472 8.73528 4.5 6.25 4.5C3.76472 4.5 1.75 6.51472 1.75 9C1.75 11.4853 3.76472 13.5 6.25 13.5Z"
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

export default Toggle;
