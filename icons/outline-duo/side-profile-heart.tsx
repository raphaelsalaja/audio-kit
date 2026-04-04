import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileHeart({
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
          d="M11.25 16.5V13.75H12.889C13.938 13.75 14.808 12.94 14.884 11.894L14.996 10.351L16.5 9.74999L15 7.74999C15 4.01399 11.585 1.07499 7.707 1.88499C5.441 2.35799 3.61 4.18999 3.136 6.45499C2.541 9.30099 3.976 11.873 6.25 13.055V16.5"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 16.25V13.75H12.889C13.938 13.75 14.808 12.94 14.884 11.894L14.996 10.351L16.5 9.74999L15 7.74999C15 4.01399 11.585 1.07499 7.707 1.88499C5.441 2.35799 3.61 4.18999 3.136 6.45499C2.541 9.30099 3.976 11.873 6.25 13.055V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.798 10.387C8.925 10.454 9.074 10.454 9.201 10.387C9.874 10.033 11.999 8.75099 11.999 6.66599C12.002 5.74999 11.269 5.00499 10.359 4.99899C9.812 5.00599 9.303 5.28399 8.999 5.74199C8.695 5.28399 8.186 5.00599 7.639 4.99899C6.729 5.00499 5.996 5.74999 5.999 6.66599C5.999 8.75099 8.124 10.033 8.797 10.387H8.798Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SideProfileHeart;
