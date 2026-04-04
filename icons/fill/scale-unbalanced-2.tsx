import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleUnbalanced2({
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
          d="M5.25478 3.58229L7.03806 8.13154C7.22997 8.62124 7.10566 9.23239 6.63673 9.58503C4.95849 10.8471 2.88747 10.8535 1.31652 9.56893C0.87115 9.20464 0.773532 8.6091 0.960739 8.1412L3.32697 2.22558C3.37436 2.10457 3.451 2.00146 3.54646 1.92248C3.60505 1.87395 3.67082 1.83448 3.7415 1.80561C3.87579 1.75065 4.02708 1.73406 4.17862 1.76587C4.18965 1.76818 4.20059 1.77073 4.21146 1.77352L14.1175 4.26246C14.3647 4.31026 14.5754 4.48048 14.6714 4.72031L17.0393 10.6401C17.2265 11.108 17.1287 11.7036 16.6834 12.0678C15.8748 12.729 14.9338 13.0481 13.9821 13.0301C13.0847 13.0131 12.1777 12.6964 11.3633 12.0839C10.8943 11.7312 10.77 11.12 10.962 10.6303L12.9654 5.51962L5.25478 3.58229ZM15.2672 10.2488L13.9821 7.03592L12.7226 10.2488H15.2672ZM4.01793 4.53707L5.27737 7.75H2.73276L4.01793 4.53707Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 1.75C8.25 1.33579 8.58579 1 9 1C9.41421 1 9.75 1.33579 9.75 1.75V13.25C9.75 14.2165 10.5335 15 11.5 15H13.25C13.6642 15 14 15.3358 14 15.75C14 16.1642 13.6642 16.5 13.25 16.5H11.5H9H6.5H4.75C4.33579 16.5 4 16.1642 4 15.75C4 15.3358 4.33579 15 4.75 15H6.5C7.46649 15 8.25 14.2165 8.25 13.25V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ScaleUnbalanced2;
