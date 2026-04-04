import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Minus({
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
          d="M17.833 8.5278L13.8838 3.6504C13.5498 3.2368 13.0547 3 12.5234 3H5.25C3.7334 3 2.5 4.2334 2.5 5.75V12H5.75C6.9907 12 8 13.0093 8 14.25C8 14.5142 7.9459 14.7642 7.8618 15H12.5234C13.0546 15 13.5498 14.7632 13.8828 14.3511L17.833 9.4722C18.0557 9.1968 18.0557 8.8032 17.833 8.5278Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 15H0.75C0.3359 15 0 14.6641 0 14.25C0 13.8359 0.3359 13.5 0.75 13.5H5.75C6.1641 13.5 6.5 13.8359 6.5 14.25C6.5 14.6641 6.1641 15 5.75 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Label2Minus;
