import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseLock({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M12 12.0177V11.25C12 10.0078 13.0078 9 14.25 9C15.4922 9 16.5 10.0078 16.5 11.25V12.0177C17.3482 12.1391 18 12.8688 18 13.75V15.25C18 16.2161 17.2167 17 16.25 17H12.25C11.2833 17 10.5 16.2161 10.5 15.25V13.75C10.5 12.8688 11.1518 12.1391 12 12.0177ZM13.5 11.25C13.5 10.8362 13.8362 10.5 14.25 10.5C14.6638 10.5 15 10.8362 15 11.25V12H13.5V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V8.7008C16.3151 7.96227 15.3364 7.5 14.25 7.5C12.2612 7.5 10.6334 9.0492 10.5078 11.0063C9.60113 11.583 9 12.5959 9 13.75V15.25C9 15.5081 9.0301 15.7592 9.087 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseLock;
