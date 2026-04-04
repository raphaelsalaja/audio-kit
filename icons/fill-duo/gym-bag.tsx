import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GymBag({
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
          d="M1.752 7.07476C2.02628 6.43596 2.65505 6 3.371 6H14.628C15.3442 6 15.9731 6.43621 16.2473 7.07534C16.9294 8.66461 16.999 10.3791 16.999 11C16.999 12.5011 16.5903 13.9847 16.2378 14.8893C15.9737 15.5673 15.3238 16 14.607 16H3.392C2.67522 16 2.02531 15.5673 1.76116 14.8893C1.40874 13.9847 1 12.5021 1 11C1 10.3796 1.06858 8.66444 1.752 7.07476Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 5C6.5 3.61921 7.61921 2.5 9 2.5C10.3808 2.5 11.5 3.61921 11.5 5V16H13V5C13 2.79079 11.2092 1 9 1C6.79079 1 5 2.79079 5 5V16H6.5V5Z"
          fill={fill}
        />
        <path
          d="M7.5 9.25C7.5 8.83579 7.83579 8.5 8.25 8.5H9.75C10.1642 8.5 10.5 8.83579 10.5 9.25C10.5 9.66421 10.1642 10 9.75 10H8.25C7.83579 10 7.5 9.66421 7.5 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GymBag;
