import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowLayout({
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
          d="M14.2501 2H3.75009C2.23349 2 1.00009 3.2334 1.00009 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50009 5.5C2.94779 5.5 2.50009 5.0522 2.50009 4.5C2.50009 3.9478 2.94779 3.5 3.50009 3.5C4.05239 3.5 4.50009 3.9478 4.50009 4.5C4.50009 5.0522 4.05229 5.5 3.50009 5.5ZM6.50009 5.5C5.94779 5.5 5.50009 5.0522 5.50009 4.5C5.50009 3.9478 5.94779 3.5 6.50009 3.5C7.05239 3.5 7.50009 3.9478 7.50009 4.5C7.50009 5.0522 7.05229 5.5 6.50009 5.5Z"
          fill={fill}
        />
        <path
          d="M6.00009 7H1.00009V13.25C1.00009 14.7686 2.23139 16 3.75009 16H6.00009V7Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6 7L6 16H14.2501C15.7689 16 17.0001 14.7686 17.0001 13.25V7H6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default WindowLayout;
