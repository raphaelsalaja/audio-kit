import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Merge3({
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
          d="M15.03 14.97L11.28 11.22C10.987 10.927 10.512 10.927 10.219 11.22C9.92599 11.513 9.92599 11.988 10.219 12.281L13.969 16.031C14.115 16.177 14.307 16.251 14.499 16.251C14.691 16.251 14.883 16.178 15.029 16.031C15.322 15.738 15.323 15.263 15.03 14.97Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.72 5.53005C11.866 5.67605 12.058 5.75002 12.25 5.75002C12.442 5.75002 12.634 5.67705 12.78 5.53005C13.073 5.23705 13.073 4.76202 12.78 4.46902L9.52999 1.21902C9.23699 0.926018 8.76199 0.926018 8.46899 1.21902L5.21899 4.46902C4.92599 4.76202 4.92599 5.23705 5.21899 5.53005C5.51199 5.82305 5.98699 5.82305 6.27999 5.53005L8.24999 3.56002V9.17104C8.24999 9.50504 8.12 9.81902 7.884 10.055L2.96999 14.97C2.67699 15.263 2.67699 15.738 2.96999 16.031C3.11599 16.177 3.30799 16.251 3.49999 16.251C3.69199 16.251 3.88399 16.178 4.02999 16.031L8.94399 11.117C9.46399 10.597 9.74999 9.90702 9.74999 9.17202V3.561L11.72 5.53005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Merge3;
