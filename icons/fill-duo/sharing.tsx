import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sharing({
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
          d="M9 14.75C10.7949 14.75 12.25 13.2949 12.25 11.5C12.25 9.70507 10.7949 8.25 9 8.25C7.20507 8.25 5.75 9.70507 5.75 11.5C5.75 13.2949 7.20507 14.75 9 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.03 7.46997L3.56 5H5.24899C5.66299 5 5.99899 4.664 5.99899 4.25C5.99899 3.836 5.66299 3.5 5.24899 3.5H1.75C1.336 3.5 1 3.836 1 4.25V7.75C1 8.164 1.336 8.5 1.75 8.5C2.164 8.5 2.5 8.164 2.5 7.75V6.06104L4.97 8.53101C5.116 8.67701 5.308 8.75098 5.5 8.75098C5.692 8.75098 5.884 8.67801 6.03 8.53101C6.323 8.23801 6.323 7.76297 6.03 7.46997Z"
          fill={fill}
        />
        <path
          d="M16.25 3.5H12.75C12.336 3.5 12 3.836 12 4.25C12 4.664 12.336 5 12.75 5H14.439L11.969 7.46997C11.676 7.76297 11.676 8.23801 11.969 8.53101C12.115 8.67701 12.307 8.75098 12.499 8.75098C12.691 8.75098 12.883 8.67801 13.029 8.53101L15.499 6.06104V7.75C15.499 8.164 15.835 8.5 16.249 8.5C16.663 8.5 16.999 8.164 16.999 7.75V4.25C16.999 3.836 16.663 3.5 16.249 3.5H16.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sharing;
