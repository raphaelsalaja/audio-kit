import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewBottom2({
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
          d="M11.5001 13H9.75012V11.25C9.75012 10.8359 9.41422 10.5 9.00012 10.5C8.58602 10.5 8.25012 10.8359 8.25012 11.25V13H6.50012C6.08602 13 5.75012 13.3359 5.75012 13.75C5.75012 14.1641 6.08602 14.5 6.50012 14.5H8.25012V16.25C8.25012 16.6641 8.58602 17 9.00012 17C9.41422 17 9.75012 16.6641 9.75012 16.25V14.5H11.5001C11.9142 14.5 12.2501 14.1641 12.2501 13.75C12.2501 13.3359 11.9142 13 11.5001 13Z"
          fill={fill}
        />
        <path
          d="M14.7501 3H3.25012C2.00748 3 1.00012 4.00736 1.00012 5.25V6.75C1.00012 7.99264 2.00748 9 3.25012 9H14.7501C15.9927 9 17.0001 7.99264 17.0001 6.75V5.25C17.0001 4.00736 15.9927 3 14.7501 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableRowNewBottom2;
