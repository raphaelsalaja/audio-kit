import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileHeart({
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
          d="M12.25 1.75H5.75C4.6454 1.75 3.75 2.6454 3.75 3.75V14.25C3.75 15.3546 4.6454 16.25 5.75 16.25H12.25C13.3546 16.25 14.25 15.3546 14.25 14.25V3.75C14.25 2.6454 13.3546 1.75 12.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.79804 11.949C8.92504 12.017 9.07403 12.017 9.20103 11.949C9.87403 11.591 11.999 10.294 11.999 8.186C12.002 7.26 11.269 6.506 10.359 6.5C9.81205 6.507 9.30303 6.788 8.99903 7.252C8.69503 6.789 8.18605 6.508 7.63905 6.5C6.72905 6.506 5.99603 7.26 5.99903 8.186C5.99903 10.295 8.12404 11.592 8.79704 11.949H8.79804Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 1.75H5.75C4.6454 1.75 3.75 2.6454 3.75 3.75V14.25C3.75 15.3546 4.6454 16.25 5.75 16.25H12.25C13.3546 16.25 14.25 15.3546 14.25 14.25V3.75C14.25 2.6454 13.3546 1.75 12.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 2H7.5V2.75H10.5V2Z"
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

export default MobileHeart;
