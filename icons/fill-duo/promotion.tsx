import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Promotion({
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
          d="M3 3.75C3 2.23079 4.23079 1 5.75 1H12.25C13.7692 1 15 2.23079 15 3.75V16.25C15 16.5266 14.8478 16.7807 14.6039 16.9113C14.36 17.0418 14.0641 17.0275 13.834 16.874L9 13.6514L4.16603 16.874C3.93588 17.0275 3.63997 17.0418 3.39611 16.9113C3.15224 16.7807 3 16.5266 3 16.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 7C7.5523 7 8 6.552 8 6C8 5.448 7.5523 5 7 5C6.4477 5 6 5.448 6 6C6 6.552 6.4477 7 7 7Z"
          fill={fill}
        />
        <path
          d="M11 11C11.5523 11 12 10.552 12 10C12 9.448 11.5523 9 11 9C10.4477 9 10 9.448 10 10C10 10.552 10.4477 11 11 11Z"
          fill={fill}
        />
        <path
          d="M11.4983 5.18945C11.8079 5.46464 11.8358 5.93869 11.5606 6.24828L7.56056 10.7483C7.28538 11.0579 6.81132 11.0858 6.50174 10.8106C6.19215 10.5354 6.16426 10.0613 6.43945 9.75174L10.4395 5.25174C10.7146 4.94215 11.1887 4.91426 11.4983 5.18945Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Promotion;
