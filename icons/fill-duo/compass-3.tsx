import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass3({
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
          d="M9.70837 1.00361C9.6035 0.702087 9.31924 0.5 9 0.5C8.68076 0.5 8.3965 0.702087 8.29163 1.00361L6.41085 6.41085L1.00361 8.29163C0.702087 8.3965 0.5 8.68076 0.5 9C0.5 9.31924 0.702087 9.6035 1.00361 9.70837L6.41085 11.5892L8.29163 16.9964C8.3965 17.2979 8.68076 17.5 9 17.5C9.31924 17.5 9.6035 17.2979 9.70837 16.9964L11.5892 11.5892L16.9964 9.70837C17.2979 9.6035 17.5 9.31924 17.5 9C17.5 8.68076 17.2979 8.3965 16.9964 8.29163L11.5892 6.41085L9.70837 1.00361ZM10 9C10 9.5523 9.552 10 9 10C8.448 10 8 9.5523 8 9C8 8.4477 8.448 8 9 8C9.552 8 10 8.4477 10 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.80669 11.0312L6.41085 11.5892L6.96882 13.1933L4.136 14.893C3.841 15.07 3.463 15.024 3.22 14.78C2.977 14.537 2.92999 14.159 3.10699 13.864L4.80669 11.0312Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.96882 4.80669L6.41085 6.41085L4.80668 6.96882L3.10698 4.136C2.92998 3.841 2.97599 3.463 3.21999 3.22C3.46299 2.977 3.84099 2.93 4.13599 3.107L6.96882 4.80669Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.1933 6.96883L11.5891 6.41085L11.0312 4.80671L13.864 3.10701C14.159 2.93001 14.537 2.97601 14.78 3.22001C15.023 3.46301 15.07 3.84101 14.893 4.13601L13.1933 6.96883Z"
          fill={fill}
        />
        <path
          d="M11.0312 13.1933L11.5892 11.5891L13.1933 11.0312L14.893 13.864C15.07 14.159 15.024 14.537 14.78 14.78C14.537 15.023 14.159 15.07 13.864 14.893L11.0312 13.1933Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Compass3;
