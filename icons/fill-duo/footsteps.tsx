import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Footsteps({
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
          d="M3.647 11.626C3.953 12.812 4.324 13.635 4.991 14.022C5.253 14.173 5.546 14.249 5.87 14.249C6.119 14.249 6.387 14.204 6.671 14.114C8.477 13.542 8.038 11.697 7.652 10.436L3.647 11.626Z"
          fill={fill}
        />
        <path
          d="M3.12401 10.217L7.36101 8.958C7.36701 8.74 7.38301 8.508 7.40301 8.258C7.47801 7.318 7.57201 6.149 7.07101 4.752C6.20701 2.348 4.80001 1.042 3.32901 1.274C1.60301 1.538 0.773006 3.345 1.05201 6.233C1.18301 7.585 2.02201 8.713 2.69601 9.62C2.85101 9.828 2.99601 10.03 3.12401 10.217Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.348 12.936C9.96199 14.197 9.52299 16.041 11.329 16.614C11.613 16.704 11.881 16.749 12.13 16.749C12.454 16.749 12.748 16.673 13.009 16.522C13.676 16.135 14.047 15.313 14.354 14.126L10.348 12.936Z"
          fill={fill}
        />
        <path
          d="M14.671 3.77402C13.193 3.54502 11.793 4.84802 10.929 7.25202C10.428 8.64802 10.522 9.81702 10.597 10.757C10.617 11.007 10.633 11.239 10.639 11.457L14.876 12.716C15.003 12.529 15.15 12.329 15.305 12.12C15.979 11.213 16.818 10.084 16.949 8.73302C17.227 5.84502 16.397 4.03702 14.671 3.77402Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Footsteps;
