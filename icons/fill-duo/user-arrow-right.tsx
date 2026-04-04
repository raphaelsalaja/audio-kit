import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserArrowRight({
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
          d="M14.7803 9.71967C14.4874 9.42678 14.0126 9.42678 13.7197 9.71967C13.4268 10.0126 13.4268 10.4874 13.7197 10.7803L14.9393 12H11.75C11.3358 12 11 12.3358 11 12.75C11 13.1642 11.3358 13.5 11.75 13.5H14.9393L13.7197 14.7197C13.4268 15.0126 13.4268 15.4874 13.7197 15.7803C14.0126 16.0732 14.4874 16.0732 14.7803 15.7803L17.2803 13.2803C17.5732 12.9874 17.5732 12.5126 17.2803 12.2197L14.7803 9.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.4735 16.6313C12.1038 16.157 11.9506 15.5688 12.0138 15H11.7499C10.5073 15 9.49993 13.9927 9.49993 12.75C9.49993 11.5074 10.5073 10.5 11.7499 10.5H12.0138C11.9844 10.2355 12.0018 9.96679 12.066 9.70729C11.1409 9.25441 10.1006 9 8.99993 9C6.14161 9 3.69052 10.7157 2.60511 13.1674C2.05155 14.4186 2.74419 15.8317 4.01253 16.2313C5.29497 16.6354 6.99277 17 8.99993 17C10.2964 17 11.4638 16.8479 12.4735 16.6313Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserArrowRight;
