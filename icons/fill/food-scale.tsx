import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodScale({
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
          d="M15.25 1H2.75C2.336 1 2 1.336 2 1.75C2 2.164 2.336 2.5 2.75 2.5H8.25V3.75C8.25 4.164 8.586 4.5 9 4.5C9.414 4.5 9.75 4.164 9.75 3.75V2.5H15.25C15.664 2.5 16 2.164 16 1.75C16 1.336 15.664 1 15.25 1Z"
          fill={secondaryfill}
        />
        <path
          d="M3 11.5C3 8.191 5.691 5.5 9 5.5C12.309 5.5 15 8.191 15 11.5V14.25C15 15.767 13.767 17 12.25 17H5.75C4.233 17 3 15.767 3 14.25V11.5ZM11.2803 10.7803C11.5732 10.4874 11.5732 10.0126 11.2803 9.71967C10.9874 9.42678 10.5126 9.42678 10.2197 9.71967L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303C8.76256 12.8232 9.23744 12.8232 9.53033 12.5303L11.2803 10.7803Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FoodScale;
