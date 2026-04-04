import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet3({
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
          d="M11.2496 10.0354C11.3188 9.73543 11.5158 9.37831 11.9661 9.25H16.25V12.75C16.25 13.8546 15.3546 14.75 14.25 14.75H3.75C2.64543 14.75 1.75 13.8546 1.75 12.75V9.25H6.01568C6.52847 9.39613 6.71284 9.83902 6.75394 10.1563V11.75H11.2496V10.0354Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 8.25C1.75 7.145 2.645 6.25 3.75 6.25H14.25C15.355 6.25 16.25 7.145 16.25 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.25H12.25C11.698 9.25 11.25 9.698 11.25 10.25V10.75C11.25 11.302 10.802 11.75 10.25 11.75H7.75C7.198 11.75 6.75 11.302 6.75 10.75V10.25C6.75 9.698 6.302 9.25 5.75 9.25H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3.25H3.75C2.64543 3.25 1.75 4.14543 1.75 5.25V12.75C1.75 13.8546 2.64543 14.75 3.75 14.75H14.25C15.3546 14.75 16.25 13.8546 16.25 12.75V5.25C16.25 4.14543 15.3546 3.25 14.25 3.25Z"
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

export default Wallet3;
