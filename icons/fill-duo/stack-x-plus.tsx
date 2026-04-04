import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackXPlus({
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
          d="M11.7501 2.5H6.25012C4.73134 2.5 3.50012 3.73122 3.50012 5.25V12.75C3.50012 14.2688 4.73134 15.5 6.25012 15.5H11.7501C13.2689 15.5 14.5001 14.2688 14.5001 12.75V5.25C14.5001 3.73122 13.2689 2.5 11.7501 2.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.25012 3C0.836022 3 0.500122 3.3359 0.500122 3.75V14.25C0.500122 14.6641 0.836022 15 1.25012 15C1.66422 15 2.00012 14.6641 2.00012 14.25V3.75C2.00012 3.3359 1.66422 3 1.25012 3Z"
          fill={fill}
        />
        <path
          d="M16.7501 3C16.336 3 16.0001 3.3359 16.0001 3.75V14.25C16.0001 14.6641 16.336 15 16.7501 15C17.1642 15 17.5001 14.6641 17.5001 14.25V3.75C17.5001 3.3359 17.1642 3 16.7501 3Z"
          fill={fill}
        />
        <path
          d="M11.0001 8.25H9.75012V7C9.75012 6.5859 9.41422 6.25 9.00012 6.25C8.58602 6.25 8.25012 6.5859 8.25012 7V8.25H7.00012C6.58602 8.25 6.25012 8.5859 6.25012 9C6.25012 9.4141 6.58602 9.75 7.00012 9.75H8.25012V11C8.25012 11.4141 8.58602 11.75 9.00012 11.75C9.41422 11.75 9.75012 11.4141 9.75012 11V9.75H11.0001C11.4142 9.75 11.7501 9.4141 11.7501 9C11.7501 8.5859 11.4142 8.25 11.0001 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackXPlus;
