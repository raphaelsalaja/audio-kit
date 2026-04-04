import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paperclip2({
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
          d="M10.985 5.422L6.212 10.195C5.626 10.781 5.626 11.731 6.212 12.316C6.798 12.902 7.748 12.902 8.333 12.316L13.283 7.366C14.455 6.194 14.455 4.295 13.283 3.123C12.111 1.951 10.212 1.951 9.04 3.123L4.09 8.073C2.333 9.83 2.333 12.68 4.09 14.437C5.847 16.194 8.697 16.194 10.454 14.437L15.227 9.664"
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

export default Paperclip2;
