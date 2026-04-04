import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortUp({
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
          d="M9.932 1.91604C9.457 1.38704 8.543 1.38704 8.069 1.91604L4.938 5.41604C4.604 5.78904 4.52399 6.30303 4.72699 6.76003C4.93099 7.21703 5.369 7.501 5.869 7.501H12.133C12.633 7.501 13.071 7.21703 13.275 6.76003C13.478 6.30303 13.398 5.78901 13.064 5.41701L9.933 1.91701L9.932 1.91604Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SortUp;
