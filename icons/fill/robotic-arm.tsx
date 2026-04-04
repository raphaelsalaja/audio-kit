import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RoboticArm({
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
          d="M11.5792 1.91461C11.7364 1.6002 12.0909 1.43715 12.4319 1.52241L15.4319 2.27241C15.8337 2.37287 16.0781 2.78007 15.9776 3.18192C15.8771 3.58377 15.4699 3.82809 15.0681 3.72763L12.6518 3.12354L11.5885 5.25002L12.6518 7.37649L15.0681 6.7724C15.4699 6.67194 15.8771 6.91626 15.9776 7.31811C16.0781 7.71996 15.8337 8.12716 15.4319 8.22762L12.4319 8.97762C12.0909 9.06288 11.7364 8.89983 11.5792 8.58542L10.2865 6.00002H6.25C5.83579 6.00002 5.5 5.66423 5.5 5.25002C5.5 4.8358 5.83579 4.50002 6.25 4.50002H10.2865L11.5792 1.91461Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2 13.75C2 12.7838 2.78379 12 3.75 12H14.25C15.2162 12 16 12.7838 16 13.75V14.75C16 15.7162 15.2162 16.5 14.25 16.5H3.75C2.78379 16.5 2 15.7162 2 14.75V13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.95943 12L4.3748 7.24615C4.41621 7.24871 4.45795 7.25001 4.5 7.25001C4.99514 7.25001 5.44839 7.06987 5.79775 6.77158L7.54057 12H5.95943Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25 5.25C2.25 4.00781 3.25781 3 4.5 3C5.74219 3 6.75 4.00781 6.75 5.25C6.75 6.49219 5.74219 7.5 4.5 7.5C3.25781 7.5 2.25 6.49219 2.25 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RoboticArm;
