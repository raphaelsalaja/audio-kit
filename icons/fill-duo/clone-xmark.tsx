import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloneXmark({
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
          d="M10.25 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.25C1.5 11.7688 2.73122 13 4.25 13H10.25C11.7688 13 13 11.7688 13 10.25V4.25C13 2.73122 11.7688 1.5 10.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.75 5H13V10.25C13 11.7666 11.7666 13 10.25 13H5V13.75C5 15.2666 6.2334 16.5 7.75 16.5H13.75C15.2666 16.5 16.5 15.2666 16.5 13.75V7.75C16.5 6.2334 15.2666 5 13.75 5Z"
          fill={fill}
        />
        <path
          d="M9.25005 9.99999C9.05765 9.99999 8.86625 9.92679 8.71975 9.78029L4.71975 5.78029C4.42675 5.48729 4.42675 5.01267 4.71975 4.71977C5.01275 4.42687 5.48737 4.42677 5.78027 4.71977L9.78027 8.71977C10.0733 9.01277 10.0733 9.48739 9.78027 9.78029C9.63377 9.92679 9.44245 9.99999 9.25005 9.99999Z"
          fill={fill}
        />
        <path
          d="M5.25005 9.99999C5.05765 9.99999 4.86625 9.9268 4.71975 9.7803C4.42675 9.4873 4.42675 9.01268 4.71975 8.71978L8.71975 4.71978C9.01275 4.42678 9.48737 4.42678 9.78027 4.71978C10.0732 5.01278 10.0733 5.4874 9.78027 5.7803L5.78027 9.7803C5.63377 9.9268 5.44245 9.99999 5.25005 9.99999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneXmark;
