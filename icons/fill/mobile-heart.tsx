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
          d="M6.75 2C6.75 1.58579 7.08579 1.25 7.5 1.25H10.5C10.9142 1.25 11.25 1.58579 11.25 2V2.75C11.25 3.16421 10.9142 3.5 10.5 3.5H7.5C7.08579 3.5 6.75 3.16421 6.75 2.75V2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.79804 11.949C8.92504 12.017 9.07403 12.017 9.20103 11.949C9.87403 11.591 11.999 10.294 11.999 8.186C12.002 7.26 11.269 6.506 10.359 6.5C9.81205 6.507 9.30303 6.788 8.99903 7.252C8.69503 6.789 8.18605 6.508 7.63905 6.5C6.72905 6.506 5.99603 7.26 5.99903 8.186C5.99903 10.295 8.12504 11.592 8.79804 11.949Z"
          fill={secondaryfill}
        />
        <path
          d="M3 3.75C3 2.23119 4.23119 1 5.75 1H12.25C13.7688 1 15 2.23119 15 3.75V14.25C15 15.7688 13.7688 17 12.25 17H5.75C4.23119 17 3 15.7688 3 14.25V3.75ZM5.75 2.5C5.05961 2.5 4.5 3.05961 4.5 3.75V14.25C4.5 14.9404 5.05961 15.5 5.75 15.5H12.25C12.9404 15.5 13.5 14.9404 13.5 14.25V3.75C13.5 3.05961 12.9404 2.5 12.25 2.5H5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MobileHeart;
