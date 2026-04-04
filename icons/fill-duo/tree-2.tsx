import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tree2({
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
          d="M13.7163 5.1846C13.436 2.8311 11.4277 1 9 1C6.5864 1 4.5874 2.8096 4.2925 5.1821C2.3779 5.7163 1 7.4746 1 9.5C1 11.9814 3.0186 14 5.5 14H12.5C14.9814 14 17 11.9814 17 9.5C17 7.4766 15.6265 5.7207 13.7163 5.1846Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.4697 7.9697L9.75 8.6894V6.7499C9.75 6.3358 9.4141 5.9999 9 5.9999C8.5859 5.9999 8.25 6.3358 8.25 6.7499V10.4394L7.03031 9.2197C6.73731 8.9267 6.2627 8.9267 5.9698 9.2197C5.6769 9.5127 5.6768 9.9873 5.9698 10.2802L8.25011 12.5605V16.25C8.25011 16.6641 8.58601 17 9.00011 17C9.41421 17 9.75011 16.6641 9.75011 16.25V10.8105L11.5304 9.0302C11.8234 8.7372 11.8234 8.2626 11.5304 7.9697C11.2374 7.6768 10.7626 7.6767 10.4697 7.9697Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tree2;
