import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneModern({
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
          d="M4 2.75C4 1.78379 4.78379 1 5.75 1H12.25C13.2162 1 14 1.78379 14 2.75V15.25C14 16.2162 13.2162 17 12.25 17H5.75C4.78379 17 4 16.2162 4 15.25V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 5C5.5 4.44772 5.94772 4 6.5 4H11.5C12.0523 4 12.5 4.44772 12.5 5V13C12.5 13.5523 12.0523 14 11.5 14H6.5C5.94772 14 5.5 13.5523 5.5 13V5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhoneModern;
