import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileBookmark({
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
          d="M16.25 10H13.75C12.785 10 12 10.785 12 11.75V17.25C12 17.553 12.183 17.827 12.463 17.943C12.742 18.059 13.067 17.995 13.28 17.78L15 16.06L16.72 17.78C16.864 17.924 17.055 18 17.25 18C17.347 18 17.444 17.981 17.537 17.943C17.817 17.827 18 17.553 18 17.25V11.75C18 10.785 17.215 10 16.25 10Z"
          fill={fill}
        />
        <path
          d="M15.487 5.427L11.572 1.512C11.2442 1.1841 10.7996 1 10.336 1H4.75C3.2312 1 2 2.2312 2 3.75V14.25C2 15.7688 3.2312 17 4.75 17H10.5V11.75C10.5 9.95657 11.9566 8.5 13.75 8.5H16V6.6655C16 6.2009 15.8155 5.7553 15.487 5.427Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.8691 6.00095H12C11.45 6.00095 11 5.55095 11 5.00095V1.13098C11.212 1.21803 11.4068 1.34674 11.572 1.51197L15.487 5.42697C15.6527 5.59263 15.7818 5.78817 15.8691 6.00095Z"
          fill={fill}
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H9.75149C10.1657 9 10.5015 9.33579 10.5015 9.75C10.5015 10.1642 10.1657 10.5 9.75149 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileBookmark;
