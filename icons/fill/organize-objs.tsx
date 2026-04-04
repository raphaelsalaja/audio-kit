import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OrganizeObjs({
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
          d="M14.72 12.22L13.5 13.44V4.561L14.72 5.78103C14.866 5.92703 15.058 6.001 15.25 6.001C15.442 6.001 15.634 5.92803 15.78 5.78103C16.073 5.48803 16.073 5.01299 15.78 4.71999L13.28 2.21999C12.987 1.92699 12.512 1.92699 12.219 2.21999L9.71902 4.71999C9.42602 5.01299 9.42602 5.48803 9.71902 5.78103C10.012 6.07403 10.487 6.07403 10.78 5.78103L12 4.561V13.4391L10.78 12.2191C10.487 11.9261 10.012 11.9261 9.71902 12.2191C9.42602 12.5121 9.42602 12.9871 9.71902 13.2801L12.219 15.7801C12.365 15.9261 12.557 16.0001 12.749 16.0001C12.941 16.0001 13.133 15.9271 13.279 15.7801L15.779 13.2801C16.072 12.9871 16.072 12.5121 15.779 12.2191C15.486 11.9261 15.011 11.9261 14.718 12.2191L14.72 12.22Z"
          fill={secondaryfill}
        />
        <path
          d="M6.3846 10H3.6154C2.7232 10 2 10.7237 2 11.6154V14.3846C2 15.2763 2.7232 16 3.6154 16H6.3846C7.2768 16 8 15.2763 8 14.3846V11.6154C8 10.7237 7.2768 10 6.3846 10Z"
          fill={fill}
        />
        <path
          d="M6.3846 2H3.6154C2.7232 2 2 2.72372 2 3.61542V6.38458C2 7.27628 2.7232 8 3.6154 8H6.3846C7.2768 8 8 7.27628 8 6.38458V3.61542C8 2.72372 7.2768 2 6.3846 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OrganizeObjs;
