import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PercentageArrowUp({
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
          d="M9.25 11C10.2165 11 11 10.2165 11 9.25C11 8.2835 10.2165 7.5 9.25 7.5C8.2835 7.5 7.5 8.2835 7.5 9.25C7.5 10.2165 8.2835 11 9.25 11Z"
          fill={secondaryfill}
        />
        <path
          d="M14.75 16.5C15.7165 16.5 16.5 15.7165 16.5 14.75C16.5 13.7835 15.7165 13 14.75 13C13.7835 13 13 13.7835 13 14.75C13 15.7165 13.7835 16.5 14.75 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.2803 7.71975C15.9873 7.42675 15.5126 7.42675 15.2197 7.71975L7.71975 15.2197C7.42675 15.5127 7.42675 15.9873 7.71975 16.2802C7.86625 16.4267 8.05765 16.4999 8.25005 16.4999C8.44245 16.4999 8.63384 16.4267 8.78034 16.2802L16.2803 8.78017C16.5733 8.48717 16.5733 8.01265 16.2803 7.71975Z"
          fill={secondaryfill}
        />
        <path
          d="M7.71964 5.7803C7.86614 5.9268 8.05755 6.00002 8.24995 6.00002C8.44235 6.00002 8.63375 5.9268 8.78025 5.7803C9.07325 5.4873 9.07325 5.01277 8.78025 4.71987L5.78025 1.71987C5.48725 1.42687 5.01265 1.42687 4.71975 1.71987L1.71975 4.71987C1.42675 5.01287 1.42675 5.4874 1.71975 5.7803C2.01275 6.0732 2.48735 6.0733 2.78025 5.7803L4.49995 4.06057V15.7501C4.49995 16.1642 4.83585 16.5001 5.24995 16.5001C5.66405 16.5001 5.99995 16.1642 5.99995 15.7501V4.06057L7.71964 5.7803Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PercentageArrowUp;
