import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowBookmark({
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
          d="M14.2501 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50012 5.5C2.94782 5.5 2.50012 5.0522 2.50012 4.5C2.50012 3.9478 2.94782 3.5 3.50012 3.5C4.05242 3.5 4.50011 3.9478 4.50011 4.5C4.50011 5.0522 4.05232 5.5 3.50012 5.5ZM6.50011 5.5C5.94781 5.5 5.50011 5.0522 5.50011 4.5C5.50011 3.9478 5.94781 3.5 6.50011 3.5C7.05241 3.5 7.50011 3.9478 7.50011 4.5C7.50011 5.0522 7.05231 5.5 6.50011 5.5Z"
          fill={fill}
        />
        <path
          d="M9.50011 11.75C9.50011 9.958 10.9581 8.5 12.7501 8.5H15.2501C15.8954 8.5 16.4939 8.69432 17.0001 9.02002V7H1.00012V13.25C1.00012 14.7686 2.23132 16 3.75012 16H9.50011V11.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 18C16.0548 18 15.8634 17.9238 15.7198 17.7803L14.0001 16.0605L12.2804 17.7803C12.0656 17.9951 11.7433 18.0591 11.463 17.9429C11.1827 17.8267 11.0001 17.5533 11.0001 17.25V11.75C11.0001 10.7852 11.7853 10 12.7501 10H15.2501C16.2149 10 17.0001 10.7852 17.0001 11.75V17.25C17.0001 17.5532 16.8175 17.8267 16.5372 17.9429C16.4444 17.9815 16.3468 18 16.2501 18Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowBookmark;
