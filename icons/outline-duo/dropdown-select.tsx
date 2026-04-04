import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropdownSelect({
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
          d="M14.75 4.75H9.75V9.63141L12.836 10.824C13.583 11.097 14.1217 11.7192 14.3647 12.3382L14.75 12.25C15.855 12.25 16.75 11.355 16.75 10.25V6.75C16.75 5.645 15.855 4.75 14.75 4.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.12598 10.768L12.066 12.938C12.316 13.029 12.309 13.386 12.055 13.467L9.33597 14.337L8.46598 17.056C8.38498 17.31 8.02797 17.317 7.93697 17.067L5.76697 11.127C5.68497 10.904 5.90198 10.687 6.12598 10.768Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.583 7.5H12.083C11.925 7.5 11.781 7.58901 11.71 7.73001C11.64 7.87101 11.655 8.03999 11.749 8.16599L12.999 9.83301C13.078 9.93801 13.201 10 13.332 10C13.463 10 13.587 9.93801 13.665 9.83301L14.915 8.16599C15.01 8.03999 15.025 7.87101 14.954 7.73001C14.883 7.58901 14.739 7.5 14.581 7.5H14.583Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.12598 10.768L12.066 12.938C12.316 13.029 12.309 13.386 12.055 13.467L9.33597 14.337L8.46598 17.056C8.38498 17.31 8.02797 17.317 7.93697 17.067L5.76697 11.127C5.68497 10.904 5.90198 10.687 6.12598 10.768Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 4.75V8.89801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.0956 12.2151C16.035 12.0508 16.75 11.2359 16.75 10.25V6.75C16.75 5.646 15.855 4.75 14.75 4.75H3.25C2.145 4.75 1.25 5.646 1.25 6.75V10.25C1.25 11.2593 2.0006 12.0862 2.9733 12.2222"
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

export default DropdownSelect;
