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
          d="M6.3846 10H3.6154C2.7232 10 2 10.7237 2 11.6154V14.3846C2 15.2763 2.7232 16 3.6154 16H6.3846C7.2768 16 8 15.2763 8 14.3846V11.6154C8 10.7237 7.2768 10 6.3846 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.3846 2H3.6154C2.7232 2 2 2.72372 2 3.61542V6.38458C2 7.27628 2.7232 8 3.6154 8H6.3846C7.2768 8 8 7.27628 8 6.38458V3.61542C8 2.72372 7.2768 2 6.3846 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.7195 12.22L13.4998 13.4391V4.561L14.7195 5.78011C14.866 5.92711 15.0579 6.00015 15.2498 6.00015C15.4417 6.00015 15.6338 5.92711 15.7803 5.78011C16.0733 5.48711 16.0733 5.01309 15.7803 4.71999L13.2803 2.21999C12.9873 1.92699 12.5125 1.92699 12.2196 2.21999L9.71975 4.71999C9.42675 5.01299 9.42675 5.48701 9.71975 5.78011C10.0128 6.07311 10.4874 6.07311 10.7803 5.78011L11.9998 4.561V13.4391L10.7803 12.22C10.4873 11.927 10.0127 11.927 9.71975 12.22C9.42685 12.513 9.42675 12.987 9.71975 13.2801L12.2196 15.7801C12.3661 15.9271 12.5582 16.0001 12.7501 16.0001C12.942 16.0001 13.1339 15.9271 13.2804 15.7801L15.7804 13.2801C16.0734 12.9871 16.0734 12.5131 15.7804 12.22C15.4874 11.927 15.0124 11.927 14.7195 12.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OrganizeObjs;
