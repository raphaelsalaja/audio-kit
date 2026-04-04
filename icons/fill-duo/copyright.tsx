import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copyright({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 6C7.34321 6 6 7.34321 6 9C6 10.6568 7.34321 12 9 12C10.1471 12 11.145 11.3565 11.6499 10.4077C11.8445 10.042 12.2986 9.90332 12.6643 10.0979C13.03 10.2925 13.1687 10.7466 12.9741 11.1123C12.219 12.5315 10.7229 13.5 9 13.5C6.51479 13.5 4.5 11.4852 4.5 9C4.5 6.51479 6.51479 4.5 9 4.5C10.7229 4.5 12.219 5.46854 12.9741 6.88771C13.1687 7.25338 13.03 7.70754 12.6643 7.90211C12.2986 8.09669 11.8445 7.95798 11.6499 7.59231C11.145 6.64348 10.1471 6 9 6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Copyright;
