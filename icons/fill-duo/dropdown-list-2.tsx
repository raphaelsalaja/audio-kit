import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropdownList2({
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
          d="M17.0002 7.25C17.0002 8.7666 15.7668 10 14.2502 10H9.00007L9.00019 2H14.2502C15.7668 2 17.0002 3.2334 17.0002 4.75V7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 13H3.75006C3.33596 13 3.00006 12.6641 3.00006 12.25C3.00006 11.8359 3.33596 11.5 3.75006 11.5H14.2501C14.6642 11.5 15.0001 11.8359 15.0001 12.25C15.0001 12.6641 14.6642 13 14.2501 13Z"
          fill={fill}
        />
        <path
          d="M14.2501 16H3.75006C3.33596 16 3.00006 15.6641 3.00006 15.25C3.00006 14.8359 3.33596 14.5 3.75006 14.5H14.2501C14.6642 14.5 15.0001 14.8359 15.0001 15.25C15.0001 15.6641 14.6642 16 14.2501 16Z"
          fill={fill}
        />
        <path
          d="M14.2501 5H11.7501C11.5921 5 11.4481 5.08901 11.3771 5.23001C11.3071 5.37101 11.3221 5.53999 11.4161 5.66599L12.6661 7.33301C12.7451 7.43801 12.8681 7.5 12.9991 7.5C13.1301 7.5 13.2541 7.43801 13.3321 7.33301L14.5821 5.66599C14.6771 5.53999 14.6921 5.37101 14.6211 5.23001C14.5501 5.08901 14.4061 5 14.2481 5H14.2501Z"
          fill={fill}
        />
        <path
          d="M1.00006 4.75C1.00006 3.2334 2.23346 2 3.75006 2H9.00007V10H3.75006C2.23346 10 1.00006 8.7666 1.00006 7.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}

export default DropdownList2;
