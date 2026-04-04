import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stage({
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
          d="M14.25 3H3.75C2.23122 3 1 4.23122 1 5.75V12.25C1 13.7688 2.23122 15 3.75 15H14.25C15.7688 15 17 13.7688 17 12.25V5.75C17 4.23122 15.7688 3 14.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.8867 9.6611C13.5527 9.2407 13.0532 9 12.5171 9H5.48291C4.94681 9 4.44731 9.2407 4.11281 9.6616L1.21411 13.312C1.63041 14.3027 2.60981 15 3.75001 15H14.25C15.3903 15 16.3698 14.3025 16.7859 13.3118L13.8867 9.6611Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Stage;
