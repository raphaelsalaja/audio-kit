import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pencil2({
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
          d="M15.387 10.604L9.637 1.35399C9.364 0.913987 8.637 0.913987 8.364 1.35399L2.613 10.604C2.539 10.723 2.5 10.86 2.5 11V16.25C2.5 16.664 2.836 17 3.25 17H14.75C15.164 17 15.5 16.664 15.5 16.25V11C15.5 10.86 15.461 10.723 15.387 10.604ZM11.75 11.611C11.109 10.789 10.121 10.25 9 10.25C7.879 10.25 6.891 10.789 6.25 11.611C5.809 11.045 5.202 10.624 4.498 10.412L7.23355 6.00391H10.7617L13.502 10.412C12.798 10.623 12.191 11.045 11.75 11.611Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pencil2;
