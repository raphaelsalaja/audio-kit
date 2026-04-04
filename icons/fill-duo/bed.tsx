import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bed({
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
          d="M17 12.5303V8.75C17 7.233 15.767 6 14.25 6H8.75C8.336 6 8 6.336 8 6.75V12L17 12.5303Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.25 11.5H2.5V3.25C2.5 2.836 2.164 2.5 1.75 2.5C1.336 2.5 1 2.836 1 3.25V14.75C1 15.164 1.336 15.5 1.75 15.5C2.164 15.5 2.5 15.164 2.5 14.75V13H15.5V14.75C15.5 15.164 15.836 15.5 16.25 15.5C16.664 15.5 17 15.164 17 14.75V12.25C17 11.836 16.664 11.5 16.25 11.5Z"
          fill={fill}
        />
        <path
          d="M5.25 10.5C6.2165 10.5 7 9.7165 7 8.75C7 7.7835 6.2165 7 5.25 7C4.2835 7 3.5 7.7835 3.5 8.75C3.5 9.7165 4.2835 10.5 5.25 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bed;
