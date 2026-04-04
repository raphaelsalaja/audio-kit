import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseLock({
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
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V8.93271C15.4775 8.65644 14.882 8.5 14.25 8.5C12.2612 8.5 10.6334 10.0492 10.5078 12.0063C9.60113 12.583 9 13.5959 9 14.75V16.25C9 16.5081 9.0301 16.7592 9.087 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.5 12.25C13.5 11.8362 13.8362 11.5 14.25 11.5C14.6638 11.5 15 11.8362 15 12.25V13H13.5V12.25ZM12 13.0177V12.25C12 11.0078 13.0078 10 14.25 10C15.4922 10 16.5 11.0078 16.5 12.25V13.0177C17.3482 13.1391 18 13.8688 18 14.75V16.25C18 17.2161 17.2167 18 16.25 18H12.25C11.2833 18 10.5 17.2161 10.5 16.25V14.75C10.5 13.8688 11.1518 13.1391 12 13.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseLock;
