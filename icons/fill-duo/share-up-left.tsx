import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareUpLeft({
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
          d="M3 5.75V13.25C3 14.767 4.233 16 5.75 16H13.25C14.767 16 16 14.767 16 13.25V5.75C16 4.233 14.767 3 13.25 3H5.75C4.233 3 3 4.233 3 5.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 2H7.5C7.914 2 8.25 2.336 8.25 2.75C8.25 3.164 7.914 3.5 7.5 3.5H4.561L9.53101 8.46997C9.82401 8.76297 9.82401 9.23801 9.53101 9.53101C9.38501 9.67701 9.19301 9.75098 9.00101 9.75098C8.80901 9.75098 8.61699 9.67801 8.47099 9.53101L3.50101 4.56104V7.5C3.50101 7.914 3.16501 8.25 2.75101 8.25C2.33701 8.25 2.00101 7.914 2.00101 7.5V2.75C2.00101 2.336 2.33701 2 2.75101 2H2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareUpLeft;
