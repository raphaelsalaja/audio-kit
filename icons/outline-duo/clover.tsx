import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clover({
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
          d="M9 9C11.412 6.991 13.254 5.81 14.902 5.81C15.524 5.81 16.124 6.11 16.231 6.786C16.359 7.591 15.81 8.446 15.15 9C15.81 9.555 16.358 10.409 16.231 11.214C16.124 11.89 15.524 12.19 14.902 12.19C13.253 12.19 11.411 11.009 9 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9C6.588 11.009 4.746 12.19 3.098 12.19C2.476 12.19 1.876 11.89 1.769 11.214C1.641 10.409 2.19 9.554 2.85 9C2.19 8.445 1.642 7.591 1.769 6.786C1.876 6.11 2.476 5.81 3.098 5.81C4.747 5.81 6.589 6.991 9 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9C6.991 6.588 5.81 4.746 5.81 3.098C5.81 2.476 6.11 1.876 6.786 1.769C7.591 1.641 8.446 2.19 9 2.85C9.555 2.19 10.409 1.642 11.214 1.769C11.89 1.876 12.19 2.476 12.19 3.098C12.19 4.747 11.009 6.589 9 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C11.009 11.412 12.19 13.254 12.19 14.902C12.19 15.524 11.89 16.124 11.214 16.231C10.409 16.359 9.554 15.81 9 15.15C8.445 15.81 7.591 16.358 6.786 16.231C6.11 16.124 5.81 15.524 5.81 14.902C5.81 13.253 6.991 11.411 9 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C11.412 6.991 13.254 5.81 14.902 5.81C15.524 5.81 16.124 6.11 16.231 6.786C16.359 7.591 15.81 8.446 15.15 9C15.81 9.555 16.358 10.409 16.231 11.214C16.124 11.89 15.524 12.19 14.902 12.19C13.253 12.19 11.411 11.009 9 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C6.588 11.009 4.746 12.19 3.098 12.19C2.476 12.19 1.876 11.89 1.769 11.214C1.641 10.409 2.19 9.554 2.85 9C2.19 8.445 1.642 7.591 1.769 6.786C1.876 6.11 2.476 5.81 3.098 5.81C4.747 5.81 6.589 6.991 9 9Z"
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

export default Clover;
