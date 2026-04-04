import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stack3Plus({
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
          d="M13.7501 2H4.25011C2.73132 2 1.50012 3.23122 1.50012 4.75V11.25C1.50012 12.7688 2.73132 14 4.25011 14H13.7501C15.2689 14 16.5001 12.7688 16.5001 11.25V4.75C16.5001 3.23122 15.2689 2 13.7501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.75012 8.75H8.25012V10.25C8.25012 10.6641 8.58602 11 9.00012 11C9.41422 11 9.75012 10.6641 9.75012 10.25V8.75H11.2501C11.6642 8.75 12.0001 8.4141 12.0001 8C12.0001 7.5859 11.6642 7.25 11.2501 7.25H9.75012V5.75C9.75012 5.3359 9.41422 5 9.00012 5C8.58602 5 8.25012 5.3359 8.25012 5.75V7.25H6.75012C6.33602 7.25 6.00012 7.5859 6.00012 8C6.00012 8.4141 6.33602 8.75 6.75012 8.75Z"
          fill={fill}
        />
        <path
          d="M13.2501 15.5H4.75012C4.33602 15.5 4.00012 15.8359 4.00012 16.25C4.00012 16.6641 4.33602 17 4.75012 17H13.2501C13.6642 17 14.0001 16.6641 14.0001 16.25C14.0001 15.8359 13.6642 15.5 13.2501 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Stack3Plus;
