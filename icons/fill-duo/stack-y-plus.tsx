import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackYPlus({
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
          d="M12.7501 3.5H5.25012C3.73134 3.5 2.50012 4.73122 2.50012 6.25V11.75C2.50012 13.2688 3.73134 14.5 5.25012 14.5H12.7501C14.2689 14.5 15.5001 13.2688 15.5001 11.75V6.25C15.5001 4.73122 14.2689 3.5 12.7501 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75012 2H14.2501C14.6642 2 15.0001 1.6641 15.0001 1.25C15.0001 0.8359 14.6642 0.5 14.2501 0.5H3.75012C3.33602 0.5 3.00012 0.8359 3.00012 1.25C3.00012 1.6641 3.33602 2 3.75012 2Z"
          fill={fill}
        />
        <path
          d="M14.2501 16H3.75012C3.33602 16 3.00012 16.3359 3.00012 16.75C3.00012 17.1641 3.33602 17.5 3.75012 17.5H14.2501C14.6642 17.5 15.0001 17.1641 15.0001 16.75C15.0001 16.3359 14.6642 16 14.2501 16Z"
          fill={fill}
        />
        <path
          d="M9.00012 11.75C9.41422 11.75 9.75012 11.4141 9.75012 11V9.75H11.0001C11.4142 9.75 11.7501 9.4141 11.7501 9C11.7501 8.5859 11.4142 8.25 11.0001 8.25H9.75012V7C9.75012 6.5859 9.41422 6.25 9.00012 6.25C8.58602 6.25 8.25012 6.5859 8.25012 7V8.25H7.00012C6.58602 8.25 6.25012 8.5859 6.25012 9C6.25012 9.4141 6.58602 9.75 7.00012 9.75H8.25012V11C8.25012 11.4141 8.58602 11.75 9.00012 11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackYPlus;
